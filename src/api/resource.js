import http from './request.js'
let path = {	
	login:"/login",											//登录
	loginOut:'/loginout',									//退出登录
	getIndex:'index/index',									//首页信息
	getBankInfo:'index/editBank',							//获取银行卡信息
	postBankInfo:'index/editBank',							//修改银行卡
	agentList:'team/agentlist',								//代理列表
	createAgent:'team/agentadd',							//创建代理
	editAgent:'team/agentedit',								//编辑代理
	setsAgentStatus:'team/setstatus',						//修改代理状态
	getTotalAgentInfo:'team/getagentinfo',					//获取代理信息
	storeList:'store/storelist',							//获取商家列表
	withdrawalList:'financial/requestwithdrawallist',		//申请提现列表
	withdRawal:'financial/requestwithdrawal',				//提现
	moneyDetail:'financial/moneydetail',					//资金明细


}				
export default{
	//登录
	login(params){
		return http.post(path.login, params)
	},
	//退出登录
	loginOut(params){
		return http.get(path.loginOut, params)
	},
	//首页信息
	getIndex(params){
		return http.get(path.getIndex, params)
	},
	//银行卡信息
	getBankInfo(params){
		return http.get(path.getBankInfo, params)
	},
	//修改银行卡
	postBankInfo(params){
		return http.post(path.postBankInfo, params)
	},
	//代理列表
	agentList(params){
		return http.get(path.agentList, params)
	},
	//创建代理
	createAgent(params){
		return http.post(path.createAgent, params)
	},
	//编辑代理
	editAgent(params){
		return http.post(path.editAgent, params)
	},
	//修改代理状态
	setsAgentStatus(params){
		return http.post(path.setsAgentStatus, params)
	},
	//获取代理信息
	getTotalAgentInfo(params){
		return http.get(path.getTotalAgentInfo, params)
	},
	//获取商家列表
	storeList(params){
		return http.get(path.storeList, params)
	},
	//申请提现列表
	withdrawalList(params){
		return http.get(path.withdrawalList, params)
	},
	//提现
	withdRawal(params){
		return http.get(path.withdRawal, params)
	},
	//资金明细
	moneyDetail(params){
		return http.get(path.moneyDetail, params)
	},


	
}









