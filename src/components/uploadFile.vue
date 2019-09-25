<template>
	<div>
		<div class="imgBox">
			上传
			<input type="file" ref="imgUpload" class="upload_file" @change="uploadFn">
		</div>
	</div>
</template>
<style lang="less" scoped>
.imgBox{
	border:1px dashed #E0E0E0;
	border-radius:2px;
	position: relative;
	display: flex;
	justify-content:center;
	align-items:center;
	width: 200px;
	height: 80px;
	.upload_file {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
}
</style>
<script>
	import resource from '../api/resource.js'
	export default{
		methods:{
			// 上传图片
			uploadFn(){
				if (this.$refs.imgUpload.files.length > 0) {
					var files = this.$refs.imgUpload.files[0];
					resource.uploadFile({file:files}).then(res => {
						if(res.data.code == 1){
							let obj = {
								url:res.data.data.filename[0],
								domain:res.data.data.domain,
							}
							this.$emit('callbackFn',obj);
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}
			}

		}


	}
</script>