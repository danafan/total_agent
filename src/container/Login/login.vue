<template>
	<div>
		<el-card class="cardBox">
			<div class="title">总代理后台登录</div>
			<div class="loginForm">
				<el-input class="input" v-model="request.admin_name" placeholder="请输入账号" @keyup.enter.native="login"></el-input>
				<el-input class="input" type="password" v-model="request.password" placeholder="请输入密码" @keyup.enter.native="login"></el-input>
				<div class="input">
					<el-input v-model="request.captcha" placeholder="请输入验证码" @keyup.enter.native="login"></el-input>
					<div class="codeBox"><img class="code" :src="codeUrl" @click="getCode"></div>
				</div>
			</div>
			<el-button class="login" type="primary" @click="login">登录</el-button>
		</el-card>
	</div>
</template>
<style lang="less" scoped>
.cardBox{
	margin: 200px auto;
	width:380px;
	height: 460px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title{
		padding-bottom: 10px;
		border-bottom: 2px solid #f5f5f5;
		text-align: center;
		margin-top: 10px;
		font-size: 22px;
		font-weight: bold;
	}
	.loginForm{
		width: 100%;
		margin-top: 20px;
		.input{
			margin-bottom: 20px;
			display:flex;
		}
		.codeBox{
			border-radius: 5px;
			margin-left: 10px;
			border:1px solid #f5f5f5;
			height: 40px;
			width: 150px;
			.code{
				border-radius: 5px;
				width: 100%;
				height: 100%;
			}
		}
	}
	.login{
		width: 100%;
		margin-top: 30px;
	}
}
</style>
<script>
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				request:{
					admin_name:"",
					password:"",
					captcha:""
				},
				codeUrl:"",
				i:0
			}
		},
		created(){
			this.codeUrl = location.origin === 'http://cs_agent_admin.gxk8090.com'?
			'http://cs.gxk8090.com/agentadmin/captcha':
			'http://api.gxk8090.com/agentadmin/captcha';
		},
		methods:{
			getCode(){
				this.i += 1;
				this.codeUrl = this.codeUrl + `?i=${this.i}`;	
			},
			//点击登录
			login(){
				if(this.phone == ''){
					this.$message.warning("请输入手机号");
				}else if(this.password == ''){
					this.$message.warning("请输入密码");
				}else if(this.code == ''){
					this.$message.warning("请输入验证码");
				}else{
					resource.login(this.request).then(res => {
						if(res.data.code == '1'){
							localStorage.setItem("token",res.data.data.login_token);
							localStorage.setItem("secret_key",res.data.data.secret_key);
							localStorage.setItem("agent_id",res.data.data.agent_id);
							sessionStorage.setItem("agent_name",res.data.data.agent_name);
							this.$message.success("登录成功");
							this.$router.push('/index');
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}
			}
		}
	}
</script>