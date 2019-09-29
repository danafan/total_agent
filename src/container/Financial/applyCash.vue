<template>
	<div>
		<div class="cashBox">
			<div class="cashMoney">可提现{{detailObj.data.can_amount}}元</div>
			<el-input size="small" style="width: 200px;" type="number" v-model="cashMoney">
				<template slot="append">元</template>
			</el-input>
			<el-button type="primary" size="small" @click="cash">提现</el-button>
		</div>
		<el-card>
			<el-table :data="detailObj.data.list" border style="width: 100%" align="center" :header-cell-style="{'background':'#f4f4f4'}" :default-sort = "{prop: 'completeTime'}">
				<el-table-column prop="apply_time" label="提交时间" align="center">
				</el-table-column>
				<el-table-column prop="amount" label="金额（元）" align="center">
				</el-table-column>
				<el-table-column prop="check_status" label="审核状态" align="center">
				</el-table-column>
				<el-table-column prop="check_time" label="审核时间" align="center">
				</el-table-column>
				<el-table-column prop="remark" label="备注" align="center">
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
				:total="detailObj.count"
				>
			</el-pagination>
		</div>
	</el-card>
</div>
</template>
<style lang="less" scoped>
.cashBox{
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.cashMoney{
	margin-top: 20px;
	font-size: 20px;
}
</style>
<script>
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				req:{
					page:1,
					size:10
				},
				detailObj:{
					data:{
						can_amount:"",
						list:[]
					}
				},							//提现详情
				cashMoney:"",				//提现金额
			}
		},
		created(){
			//获取列表
			this.getList();
		},
		inject:['reload'],
		methods:{
			//分页
			handleSizeChange(val) {
				this.req.size = val;
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
				resource.withdrawalList(this.req).then(res => {
					if(res.data.code == 1){
						this.detailObj = res.data;
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//点击提现
			cash(){
				if(this.cashMoney == ''){
					this.$message.warning("请输入提现金额");
					return;
				}
				this.$confirm('确认提现?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					resource.withdRawal({amount:this.cashMoney}).then(res => {
						if(res.data.code == 1){
							this.$message.success(res.data.msg);
							this.reload();
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








