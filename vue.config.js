module.exports = {	
	devServer: {
		proxy: {
			'/agentadmin': {
				target: 'http://cs.gxk8090.com',
				ws: true,
				changOrigin: true,		//是否跨域
			}
		}
	}
}