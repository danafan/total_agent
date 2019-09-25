import resource from '../api/resource.js'
import { MessageBox,Message } from 'element-ui';


export default{
	exportUp(req){
		MessageBox.confirm('确认导出?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		}).then(() => {
			resource.exportUp(req).then(res => {
				if(res.data.code == 1){
					Message.success(res.data.msg);
				}else{
					Message.warning(res.data.msg);
				}
			})
		}).catch(() => {
			Message({
				type: 'info',
				message: '取消导出'
			});          
		});
	}
}
