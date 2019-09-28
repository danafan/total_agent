<template>
	<div class="box">
		<el-container style="height:100%">
			<el-header class="header">
				<div class="gxk">总代理后台</div>
				<div class="headerRight">
					<div class="username">{{agent_name}}</div>
					<div class="line"></div>
					<div class="tui" @click="exit">退出</div>
				</div>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu
					:default-active="activeIndex"
					class="el-menu-vertical-demo"
					active-text-color="#fff"
					:unique-opened="true"
					:router="true"
					@select="handleSelect"
					>
					<el-submenu :index="index.toString()" v-for="(item,index) in menuList">
						<template slot="title">
							<i :class="`el-icon-${item.icon}`"></i>
							<span>{{item.menu_name}}</span>
						</template>
						<el-menu-item-group>     
							<el-menu-item :index="`/${menu.web_url}`" v-for="menu in item.menu2">{{menu.menu_name}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main class="main">
				<el-card>
					<el-breadcrumb separator="/">
						<el-breadcrumb-item v-for="item in levelList">{{item.name}}</el-breadcrumb-item>
					</el-breadcrumb>
				</el-card>
				<keep-alive>
					<router-view v-if="$route.meta.keepAlive"></router-view>
				</keep-alive>
				<router-view v-if="!$route.meta.keepAlive"></router-view>
			</el-main>
		</el-container>
	</el-container>
</div>
</template>
<style lang="less" scoped>
.box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	.header{
		width: 100%;
		height: 64px;
		background: #fff;
		display:flex;
		justify-content: space-between;
		align-items: center;
		.gxk{
			width: 256px;
			height: 64px;
			display:flex;
			align-items: center;
			justify-content: center;
			font-size: 18px;
			color: #000;
		}
		.headerRight{
			display:flex;
			align-items: center;
			.service{
				font-size: 14px;
				margin-right: 24px;
			}
			.username{
				font-size: 14px;
				color: #000;
			}
			.line{
				margin-right: 8px;
				margin-left: 8px;
				border-right: 1px solid #FF8608;
				height:13px;
			}
			.tui{
				font-size: 14px;
				color: #333;
			}
		}
	}
	.el-menu-item.is-active {
		background:#409EFF !important;
	}
	.el-aside{
		background:#fff !important;
	}
	.el-menu{
		border: none !important;
	}
	.main{
		height: 100%;
		overflow-y: scroll;
	}
}
</style>
<script>
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				activeIndex:"",
				admin_name:"",
				levelList:[],
				menuList:[{
					icon:'price-tag',
					menu_name:'首页',
					menu2:[{
						menu_name:'首页',
						web_url:'index'
					}]
				},{
					icon:'trophy-1',
					menu_name:'团队管理',
					menu2:[{
						menu_name:'代理列表',
						web_url:'agentList'
					},{
						menu_name:'商家列表',
						web_url:'storeList'
					}]
				},{
					icon:'postcard',
					menu_name:'财务管理',
					menu2:[{
						menu_name:'申请提现',
						web_url:'applyCash'
					},{
						menu_name:'资金明细',
						web_url:'moneyRecord'
					}]
				}],						//导航列表
			}
		},
		created(){
			this.agent_name = sessionStorage.getItem("agent_name");
			//获取我的菜单列表
			let tab = sessionStorage.getItem("tab");
			if(!tab){
				this.activeIndex = '/index';
			}else{
				if(tab == '/userDetail'){
					this.activeIndex = '/userList';
				}else{
					this.activeIndex = tab;
				}
			}
		},	
		watch:{
			$route(n){
				this.handleSelect(n.path);
				this.levelList = this.$route.matched.filter(item=>item.name)
			}
		},
		methods:{
			handleSelect(index){
				this.activeIndex = index;
			},
			//点击退出
			exit(){
				this.$confirm('确认退出当前账户?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					resource.loginOut().then(res => {
						if(res.data.code == 1){
							sessionStorage.clear();
							this.$message.success(res.data.msg);
							this.$router.push('/login');
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消退出'
					});          
				});
			}
		}
	}
</script>




















