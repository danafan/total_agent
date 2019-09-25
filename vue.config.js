module.exports = {	
	devServer: {
		proxy: {
			'/admin': {
				target: 'http://cs.gxk8090.com',
				ws: true,
				changOrigin: true,		//是否跨域
			}
		}
	},
	assetsDir: "admin"
}