import resource from '../api/resource.js'
import { MessageBox,Message } from 'element-ui';


export default{
	exportUp(req){
		MessageBox.confirm('确认导出?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			let str = 'agent_id' + '=' + localStorage.getItem("agent_id");
			req.arr.push(str); 
			let url = `${location.origin}/agentadmin/${req.url}?${req.arr.join('&')}`;
			window.open(url);
		}).catch(() => {
			Message({
				type: 'info',
				message: '取消导出'
			});          
		});
	}
}
