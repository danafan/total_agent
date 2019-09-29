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
			let location = location.origin === 'http://cs_agent_admin.gxk8090.com'?
			'http://cs.gxk8090.com':
			'http://api.gxk8090.com';
			let url = `${location}/agentadmin/${req.url}?${req.arr.join('&')}`;
			window.open(url);
		}).catch(() => {
			Message({
				type: 'info',
				message: '取消导出'
			});          
		});
	}
}
