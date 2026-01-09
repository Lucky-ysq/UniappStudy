export function request(config={}){
	let BASE_URL = "https://tea.qingnian8.com/api/bizhi"
	
	let {
		url,
		header={},
		method="GET",
		data={}
	} = config
	
	url = BASE_URL + url;
	header['access-key'] = 253016
	
	return new Promise((resolve,reject) => {
		uni.request({
			url,
			header,
			method,
			data,
			success: (v) => {
				if(v.data.errCode === 0){
					resolve(v.data);
				}else if(v.data.errCode === 400){
					uni.showModal({
						title:"请求失败",
						content:v.data.errMsg,
						showCancel:false
					})
					reject(v.data)
				}else{
					uni.showToast({
						title:v.data.errMsg,
					})
					reject(v.data)
				}
			},
			fail: (err) => {
				return err;
			}
		})
	})
}