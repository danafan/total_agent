<template>
	<div>
		<el-card>
			<el-form :inline="true" size="small" class="demo-form-inline">
				<el-form-item label="代理账号：">
					<el-input style="width: 300px;" v-model="req.account" placeholder="输入代理账号"></el-input>
				</el-form-item>
				<el-form-item label="代理名称：">
					<el-input style="width: 300px;" v-model="req.name" placeholder="输入代理名称"></el-input>
				</el-form-item>
				<el-form-item label="状态：">
					<el-select v-model="req.status" placeholder="请选择" clearable>
						<el-option v-for="item in statusList" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="search">搜索</el-button>
				</el-form-item>
			</el-form>
			<div class="but">
				<el-button type="primary" icon="el-icon-circle-plus-outline
				" size="small" @click="create">创建代理</el-button>
				<el-button type="primary" icon="el-icon-download" size="small" @click="exportUp">导出</el-button>
			</div>
			<el-table :data="dataObj.data" border style="width: 100%" align="center" :header-cell-style="{'background':'#f4f4f4'}" :default-sort = "{prop: 'completeTime'}">
				<el-table-column prop="account" label="代理账号" align="center">
				</el-table-column>
				<el-table-column prop="name" label="代理名称" align="center">
				</el-table-column>
				<el-table-column prop="store_num" label="商家数量" align="center">
				</el-table-column>
				<el-table-column prop="status" label="代理状态" align="center">
					<template slot-scope="scope">
						<span>{{scope.row.status == 1?'正常':'关闭'}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="created_time" label="创建时间" align="center">
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="editor(scope.row.id)">编辑</el-button>
						<el-button type="text" size="small" v-if="scope.row.status == 1" @click="setting(scope.row.id,0)">关闭</el-button>
						<el-button type="text" size="small" v-if="scope.row.status == 0" @click="setting(scope.row.id,1)">开启</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="page">
				<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="req.page"
				:pager-count="11"
				:page-sizes="[5, 10, 15, 20]"
				layout="total, sizes, prev, pager, next, jumper"
				:total="dataObj.total"
				>
			</el-pagination>
		</div>
	</el-card>
	<!-- 创建或编辑 -->
	<el-dialog :title="dialogType == 0?'创建代理':'修改代理'" center width="40%" :visible.sync="showDialog">
		<el-form size="small" label-width="150px">
			<el-form-item label="代理名称：">
				<el-input v-model="createReq.name" style='width: 200px;' placeholder="请输入代理名称"></el-input>
			</el-form-item>
			<el-form-item label="代理账号：">
				<el-input v-model="createReq.account" style='width: 200px;' placeholder="请输入代理账号"></el-input>
			</el-form-item>
			<el-form-item label="密码：">
				<el-input v-model="createReq.password" style='width: 200px;' placeholder="请输入密码"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button size="small" @click="showDialog = false">取消</el-button>
			<el-button size="small" type="primary" @click="submit">确 定</el-button>
		</span>
	</el-dialog>
</div>
</template>
<style lang="less" scoped>
.dialogItem{
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	font-size: 14px;
	.itemLabel{
		width: 100px;
		font-weight: bold;
	}
}
</style>
<script>
	import exportUp from '../../api/export.js'
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				req:{
					page:1,
					pagesize:10,
					account:"",
					name:"",
					status:'-1'
				},
				statusList:[{
					id:'1',
					name:'正常'
				},{
					id:'0',
					name:'关闭'
				},{
					id:'-1',
					name:'不限'
				}],
				dataObj:{},
				showDialog:false,			//弹框默认不显示
				dialogType:0,				//弹框类型
				createReq:{
					account:"",
					name:"",
					password:""
				},							//创建商家参数
				id:"",						//点击的某个分组id
			}
		},
		created(){
			//获取列表
			this.getList();
		},
		methods:{
			//搜索
			search(){
				this.req.page = 1;
				//获取列表
				this.getList();
			},
			//分页
			handleSizeChange(val) {
				this.req.pagesize = val;
				//获取列表
				this.getList();
			},
			handleCurrentChange(val) {
				this.req.page = val;
				//获取列表
				this.getList();
			},
			//搜索
			search(){
				this.req.page = 1;
				//获取计划列表
				this.getList();
			},
			//获取列表
			getList(){
				resource.agentList(this.req).then(res => {
					if(res.data.code == 1){
						this.dataObj = res.data.data;
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//点击创建
			create(){
				this.dialogType = 0;
				this.showDialog = true;
				this.createReq = {
					account:"",
					name:"",
					password:""
				};
			},
			//确认创建
			submit(){
				if(this.createReq.name == ''){
					this.$message.warning('请输入代理名称');
					return;
				}
				if(this.createReq.account == ''){
					this.$message.warning('请输入代理账号');
					return;
				}

				if(this.dialogType == 0){
					if(this.createReq.password == ''){
						this.$message.warning('请输入密码');
						return;
					}
					resource.createAgent(this.createReq).then(res => {
						if(res.data.code == 1){
							this.showDialog = false;
							this.$message.success(res.data.msg);
							//获取列表
							this.getList();
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}else{
					this.createReq.agent_id_sub = this.id
					resource.editAgent(this.createReq).then(res => {
						if(res.data.code == 1){
							this.showDialog = false;
							this.$message.success(res.data.msg);
							//获取列表
							this.getList();
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}
				
			},
			//预约下载
			exportUp(){
				let urlObj = {
					arr:[],
					url:'team/agentlistexport'
				}
				var arr = [];
				for(let a in this.req){
					if(a != 'page' && a != 'pagesize' && this.req[a] != ''){
						let str = a + '=' + `${this.req[a]}`;
						urlObj.arr.push(str);
					}
				}
				exportUp.exportUp(urlObj)
			},
			//点击编辑
			editor(id){
				this.id = id;
				this.dialogType = 1;
				resource.getTotalAgentInfo({agent_id_sub:this.id}).then(res => {
					if(res.data.code == 1){
						this.showDialog = true;
						this.createReq.account = res.data.data.account;
						this.createReq.name = res.data.data.name;
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			setting(id,type){
				this.$confirm(`确认${type == 0?'关闭':'开启'}`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					resource.setsAgentStatus({agent_id_sub:id}).then(res => {
						if(res.data.code == 1){
							this.$message.success(res.data.msg);
							//获取列表
							this.getList();
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消'
					});          
				});
			}
			
			
		}


	}
</script>








