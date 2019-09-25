import http from './request.js'
let path = {	
	login:"admin/login",									//登录
	loginOut:'admin/quit',									//退出登录
	getIndex:'index/index',									//首页信息
	getBankInfo:'system/getbankcardinfo',					//获取银行卡信息
	updateBank:'system/bankcardupdate',						//修改银行卡
	getStoreList:'store/storelist',							//获取商家列表（分页）
	getStoreList2:'store/storelist2',						//获取商家列表（不分页）
	setStatus:'store/setstatus',							//设置商家状态
	addStore:'store/add',									//添加商家
	getStoreInfo:'store/getstoreinfo',						//商家详情
	addStoreAdmin:'storeadmin/add',							//添加商家账号
	stopStoreAdmin:'storeadmin/setstatus',					//禁用商家账号
	addShop:'shop/add',										//添加店铺
	editShop:'shop/edit',									//编辑店铺
	deleteShop:'shop/del',									//删除店铺
	getShopInfo:'shop/getinfo',								//店铺详情
	getRechangeList:'store/rechargerecordlist',				//商家充值记录列表
	rechangeDetail:'store/rechargerecorddetail',			//充值记录详情
	rechargeCheck:'store/rechargecheck',					//充值审核
	storeAccount:'store/accountstatement',					//商家资金记录
	shopList:'shop/list',									//店铺列表
	orderList:'order/orderlist',							//订单列表
	templateList:'template/list',							//模版列表
	noticeList:'usernotice/list',							//公告列表
	setNoticeStatus:'usernotice/setstatus',					//设置公告状态
	addNotice:'usernotice/add',								//添加公告
	updateNotice:'usernotice/edit',							//修改公告
	deleteNotice:'usernotice/del',							//删除公告
	getBannerList:'userbanner/list',						//获取banner列表
	setBannerStatus:'userbanner/setstatus',					//修改banner状态
	addBanner:'userbanner/add',								//添加banner
	bannerDetail:'userbanner/getinfo',						//banner详情
	updateBanner:'userbanner/edit',							//修改banner
	deleteBanner:'userbanner/del',							//删除banner
	uploadFile:'file/fileupload',							//上传文件
	deleteFile:'file/filedel',								//删除文件
	getCategoryList:'goodscate/list',						//类目列表
	addCategory:'goodscate/add',							//添加类目
	updateCategory:'goodscate/edit',						//修改类目
	deleteCategory:'goodscate/del',							//删除类目
	tagList:'usertag/list',									//标签列表
	getTagList:'user/usertag',								//标签下拉框
	addTag:'usertag/add',									//添加标签
	updateTag:'usertag/edit',								//编辑标签
	deleteTag:'usertag/del',								//删除标签
	jobList:'user/userjob',									//身份列表
	userList:'user/userlist',								//用户列表
	userHandle:'user/userhandle',							//用户启用或禁用
	withdrawRecord:'finance/withdrawrecord',				//提现记录
	withdrawDetail:'finance/withdrawdetail',				//提现详情
	withdrawCheck:'finance/withdrawcheck',					//提现审核
	amountRecord:'finance/taskamountrecord',				//资金记录
	getIdentityList:'user/checkidentity',					//用户身份审核列表
	userCheck:'user/check',									//审核用户
	freezeInfo:'user/userfreezeinfo',						//get：获取信息；post：提交
	unFreeze:'user/userunfreeze',							//get：获取信息；post：提交
	adJustinviter:'user/adjustinviter',						//get：获取信息；post：提交
	getUserDetail:'user/userdetail',						//用户基本信息
	cardCheck:'user/idcardnocheck',							//身份证审核
	wangCheck:'user/wangwangcheck',							//旺旺号审核
	orderRecord:'user/userorderrecord',						//订单记录
	cashRecord:'user/usercashout',							//提现记录
	logList:'user/log',										//日志列表
	wangRecord:'user/userwangwangreview',					//旺旺号列表
	checkWang:'user/userwangwanghandle',					//旺旺号审核
	updateWang:'user/wangwangorderlimit',					//修改旺旺号
	bankList:'user/bankcheck',								//银行卡列表
	checkBank:'user/bankcheckhandle',						//审核银行卡
	taskList:'task/tasklist',								//任务列表
	addAdmin:'admin/add',									//添加管理员
	updateAdmin:'admin/edit',								//修改管理员
	adminList:'admin/list',									//管理员列表
	adminList2:'admin/list2',								//管理员列表(不分页)
	stopTask:'task/taskstop',								//任务停止
	createrList:'task/tashcreaterlist',						//创建人列表
	reqTemplateList:'task/tasktemplatelist',				//模版列表
	deleteTemp:'task/tasktemplatedel',						//删除模版
	getStep:'task/taskgetstep',								//获取步骤
	taskStoreList:'task/taskstorelist',						//商家列表
	createTemp:'task/tasktemplatecreate',					//创建模版
	roleList:'role/list',									//角色列表
	roleList2:'role/list2',									//角色列表（不分页）
	addRole:'role/add',										//添加角色
	updateRole:'role/edit',									//修改角色
	getRoleDetail:'role/getdetail',							//角色信息
	accessList:'access/getaccesslist',						//权限列表
	controllers:'system/getcontrollers',					//所有控制器
	getMethods:'system/getmethods',							//控制器下所有方法
	getMenuList2:'menu/getmainmenus',						//获取所有菜单
	addAccess:'access/addaccess',							//添加权限
	getAccessList:'access/accesslist',						//权限列表（展示使用）
	getAdminDetail:'admin/getadmininfo',					//获取管理员信息
	getAccessInfo:'access/getinfo',							//获取权限信息
	updateAccess:'access/edit',								//修改权限
	deleteAccess:'access/del',								//删除权限
	getMenuList:'admin/mymenulist',							//菜单列表
	commentList:'comment/commentlist',						//评价任务列表
	getSystemInfo:'system/getsystemconfig',					//获取系统配置
	setSystem:'system/systemconfigupdate',					//系统设置
	userAndTag:'user/userandtag',							//获取所有标签及用户标签
	setTag:'user/settag',									//设置用户标签
	wangwangForbid:'user/wangwangforbid',					//旺旺号起禁用
	tasklook:'task/tasklook',								//查看该模版流程
	getTaskShow:'task/taskshow',							//修改模版可见商家
	taskEdit:'task/taskedit',								//修改模版可见商家
	wangNum:'user/wangwangnumlimit',						//修改用户可绑定的旺旺号数量
	chooseTemplate:'user/userchoosetemplate',				//修改用户选择的模版
	messageList:'index/mymsg',								//消息列表
	exportUp:'export/export',								//预约下载
	alipayCheck:'user/alipayacount',						//支付宝审核
	getStoreNum:'store/storedata',							//获取商家数据
	checkAlipay:'user/alipaycounthandle',					//审核支付宝

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
	updateBank(params){
		return http.post(path.updateBank, params)
	},
	//商家列表（分页）
	getStoreList(params){
		return http.get(path.getStoreList, params)
	},
	//商家列表（不分页）
	getStoreList2(params){
		return http.get(path.getStoreList2, params)
	},
	//设置商家状态
	setStatus(params){
		return http.post(path.setStatus, params)
	},
	//添加商家
	addStoreNow(params){
		return http.post(path.addStore, params)
	},
	//商家详情
	getStoreInfo(params){
		return http.get(path.getStoreInfo, params)
	},
	//添加商家账号
	addStoreAdmin(params){
		return http.post(path.addStoreAdmin, params)
	},
	//禁用商家账号
	stopStoreAdmin(params){
		return http.post(path.stopStoreAdmin, params)
	},
	//添加店铺
	addStore(params){
		return http.post(path.addShop, params)
	},
	//编辑店铺
	editShop(params){
		return http.post(path.editShop, params)
	},
	//删除店铺
	deleteShop(params){
		return http.get(path.deleteShop, params)
	},
	//店铺详情
	getShopInfo(params){
		return http.get(path.getShopInfo, params)
	},
	//商家充值记录列表
	getRechangeList(params){
		return http.get(path.getRechangeList, params)
	},
	//充值记录详情
	rechangeDetail(params){
		return http.get(path.rechangeDetail, params)
	},
	//充值审核
	rechargeCheck(params){
		return http.get(path.rechargeCheck, params)
	},
	//商家资金记录
	storeAccount(params){
		return http.get(path.storeAccount, params)
	},
	//店铺列表
	shopList(params){
		return http.get(path.shopList, params)
	},
	//订单列表
	orderList(params){
		return http.get(path.orderList, params)
	},
	//模版列表
	templateList(params){
		return http.get(path.templateList, params)
	},
	//公告列表
	noticeList(params){
		return http.get(path.noticeList, params)
	},
	//设置公告状态
	setNoticeStatus(params){
		return http.post(path.setNoticeStatus, params)
	},
	//添加公告
	addNotice(params){
		return http.post(path.addNotice, params)
	},
	//修改公告
	updateNotice(params){
		return http.post(path.updateNotice, params)
	},
	//删除公告
	deleteNotice(params){
		return http.get(path.deleteNotice, params)
	},
	//获取banner列表
	getBannerList(params){
		return http.get(path.getBannerList, params)
	},
	//添加banner
	addBanner(params){
		return http.post(path.addBanner, params)
	},
	//banner详情
	bannerDetail(params){
		return http.get(path.bannerDetail, params)
	},
	//修改banner状态
	setBannerStatus(params){
		return http.post(path.setBannerStatus, params)
	},
	//修改banner
	updateBanner(params){
		return http.post(path.updateBanner, params)
	},
	//删除banner
	deleteBanner(params){
		return http.get(path.deleteBanner, params)
	},
	//上传文件
	uploadFile(params){
		return http.post(path.uploadFile, params)
	},
	//删除文件
	deleteFile(params){
		return http.get(path.deleteFile, params)
	},
	//类目列表
	getCategoryList(params){
		return http.get(path.getCategoryList, params)
	},
	//添加类目
	addCategory(params){
		return http.post(path.addCategory, params)
	},
	//修改类目
	updateCategory(params){
		return http.post(path.updateCategory, params)
	},
	//删除类目
	deleteCategory(params){
		return http.get(path.deleteCategory, params)
	},
	//标签列表
	tagList(params){
		return http.get(path.tagList, params)
	},
	//标签列表
	getTagList(params){
		return http.get(path.getTagList, params)
	},
	//添加标签
	addTag(params){
		return http.post(path.addTag, params)
	},
	//编辑标签
	updateTag(params){
		return http.post(path.updateTag, params)
	},
	//删除标签
	deleteTag(params){
		return http.get(path.deleteTag, params)
	},
	//身份列表
	jobList(params){
		return http.get(path.jobList, params)
	},
	//用户列表
	userList(params){
		return http.get(path.userList, params)
	},
	//用户启用或禁用
	userHandle(params){
		return http.get(path.userHandle, params)
	},
	//提现记录
	withdrawRecord(params){
		return http.get(path.withdrawRecord, params)
	},
	//提现详情
	withdrawDetail(params){
		return http.get(path.withdrawDetail, params)
	},
	//提现审核
	withdrawCheck(params){
		return http.post(path.withdrawCheck, params)
	},
	//任务列表
	taskList(params){
		return http.get(path.taskList, params)
	},
	//资金记录
	amountRecord(params){
		return http.get(path.amountRecord, params)
	},
	//用户身份审核列表
	getIdentityList(params){
		return http.get(path.getIdentityList, params)
	},
	//用户身份审核
	userCheck(params){
		return http.get(path.userCheck, params)
	},
	//获取冻结信息
	freezeInfo(params){
		return http.get(path.freezeInfo, params)
	},
	//冻结
	freezeInfoPost(params){
		return http.post(path.freezeInfo, params)
	},
	//获取解冻信息
	unFreeze(params){
		return http.get(path.unFreeze, params)
	},
	//解冻
	unFreezePost(params){
		return http.post(path.unFreeze, params)
	},
	//获取邀请信息
	adJustinviter(params){
		return http.get(path.adJustinviter, params)
	},
	//邀请
	adJustinviterPost(params){
		return http.post(path.adJustinviter, params)
	},
	//用户基本信息
	getUserDetail(params){
		return http.get(path.getUserDetail, params)
	},
	//身份证审核
	cardCheck(params){
		return http.get(path.cardCheck, params)
	},
	//旺旺号审核
	wangCheck(params){
		return http.get(path.wangCheck, params)
	},
	//订单记录
	orderRecord(params){
		return http.get(path.orderRecord, params)
	},
	//提现记录
	cashRecord(params){
		return http.get(path.cashRecord, params)
	},
	//日志列表
	logList(params){
		return http.get(path.logList, params)
	},
	//旺旺列表
	wangRecord(params){
		return http.get(path.wangRecord, params)
	},
	//审核旺旺
	checkWang(params){
		return http.get(path.checkWang, params)
	},
	//修改旺旺号截单数
	updateWang(params){
		return http.get(path.updateWang, params)
	},
	//修改截单数
	updateWangPost(params){
		return http.post(path.updateWang, params)
	},
	//银行卡列表
	bankList(params){
		return http.get(path.bankList, params)
	},
	//审核银行卡
	checkBank(params){
		return http.get(path.checkBank, params)
	},
	//任务列表
	taskList(params){
		return http.get(path.taskList, params)
	},
	//添加管理员
	addAdmin(params){
		return http.post(path.addAdmin, params)
	},
	//管理员修改
	updateAdmin(params){
		return http.post(path.updateAdmin, params)
	},
	//管理员列表
	adminList(params){
		return http.get(path.adminList, params)
	},
	//管理员列表
	adminList2(params){
		return http.get(path.adminList2, params)
	},
	//任务停止
	stopTask(params){
		return http.get(path.stopTask, params)
	},
	//创建人列表
	createrList(params){
		return http.get(path.createrList, params)
	},
	//模版列表（待参数查询）
	reqTemplateList(params){
		return http.get(path.reqTemplateList, params)
	},
	//删除模版
	deleteTemp(params){
		return http.get(path.deleteTemp, params)
	},
	//获取步骤
	getStep(params){
		return http.get(path.getStep, params)
	},
	//获取步骤(post)
	getStepPost(params){
		return http.post(path.getStep, params)
	},
	//商家列表
	taskStoreList(params){
		return http.get(path.taskStoreList, params)
	},
	//创建模版
	createTemp(params){
		return http.post(path.createTemp, params)
	},
	//角色列表
	roleList(params){
		return http.get(path.roleList, params)
	},
	//角色列表
	roleList2(params){
		return http.get(path.roleList2, params)
	},
	//添加角色
	addRole(params){
		return http.post(path.addRole, params)
	},
	//修改角色
	updateRole(params){
		return http.post(path.updateRole, params)
	},
	//角色信息
	getRoleDetail(params){
		return http.get(path.getRoleDetail, params)
	},
	//权限列表
	accessList(params){
		return http.get(path.accessList, params)
	},
	//所有控制器
	controllers(params){
		return http.get(path.controllers, params)
	},
	//控制器下所有方法
	getMethods(params){
		return http.get(path.getMethods, params)
	},
	//获取所有菜单
	getMenuList(params){
		return http.get(path.getMenuList, params)
	},
	//添加权限
	addAccess(params){
		return http.post(path.addAccess, params)
	},
	//权限列表(列表展示使用)
	getAccessList(params){
		return http.get(path.getAccessList, params)
	},
	//获取管理员信息
	getAdminDetail(params){
		return http.get(path.getAdminDetail, params)
	},
	//获取权限信息
	getAccessInfo(params){
		return http.get(path.getAccessInfo, params)
	},
	//修改权限
	updateAccess(params){
		return http.post(path.updateAccess, params)
	},
	//删除权限
	deleteAccess(params){
		return http.get(path.deleteAccess, params)
	},
	//我的菜单列表
	getMenuList2(params){
		return http.get(path.getMenuList2, params)
	},
	//评价任务列表
	commentList(params){
		return http.get(path.commentList, params)
	},
	//获取系统配置
	getSystemInfo(params){
		return http.get(path.getSystemInfo, params)
	},
	//系统设置
	setSystem(params){
		return http.post(path.setSystem, params)
	},
	//获取所有标签及用户标签
	userAndTag(params){
		return http.get(path.userAndTag, params)
	},
	//设置用户标签
	setTag(params){
		return http.post(path.setTag, params)
	},
	//旺旺号起禁用
	wangwangForbid(params){
		return http.get(path.wangwangForbid, params)
	},
	//查看模版详情
	tasklook(params){
		return http.get(path.tasklook, params)
	},
	//修改模版可见商家
	getTaskShow(params){
		return http.get(path.getTaskShow, params)
	},
	//修改模版可见商家
	taskEdit(params){
		return http.post(path.taskEdit, params)
	},
	//获取用户可绑定的旺旺号数量
	getWangNum(params){
		return http.get(path.wangNum, params)
	},
	//修改用户可绑定的旺旺号数量
	postWangNum(params){
		return http.post(path.wangNum, params)
	},
	//获取用户选择的模版
	getChooseTemplate(params){
		return http.get(path.chooseTemplate, params)
	},
	//修改用户选择的模版
	postChooseTemplate(params){
		return http.post(path.chooseTemplate, params)
	},
	//消息列表
	messageList(params){
		return http.get(path.messageList, params)
	},
	//预下载
	exportUp(params){
		return http.get(path.exportUp, params)
	},
	//支付宝审核
	alipayCheck(params){
		return http.get(path.alipayCheck, params)
	},
	//获取商家数据
	getStoreNum(params){
		return http.get(path.getStoreNum, params)
	},
	//审核支付宝
	checkAlipay(params){
		return http.get(path.checkAlipay, params)
	},
}









