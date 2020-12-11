navigator = {}; window= this;
var encryptionJs = {
		//公钥串
	    public_key :    'E2E8F13A51EE5F5D63F6D0C51984ACDF366D99544B4FD0AE5132BC1B6EBE8CA9AD715CDA1626E69BF1FE37EF1B4E63AAB0B1836D929C907EE9A2DDBA5EAC26C10AD740972983BC7AA1984BEA030B44CCC74E00611FAA21C5F94AC24A8EBE0EE38ECCAA0776300FC2A3C20B0285E6373A402860D92F1645034B217C2D4F102115',
	    //公钥长度
	    public_length : "10001",

	   /**
	   * 加密串
	   × str 加密变量
	   * @return bool
	   */
		edai_encryption:function(str){
			var rsa = new RSAKey();
			rsa.setPublic(encryptionJs.public_key, encryptionJs.public_length);
			var res = rsa.encrypt(str);

			return res;
	    },
	    /**
	     * 加密
	     */
	    form_encryption:function(formDataStr){
	    	datas=formDataStr.split("&");
	    	var postArr = new Array();
	    	$.each(datas,function(i,v){
	    		var vv=v.split("=");
	    		postArr.push(vv[0]+'='+(vv[1]?encryptionJs.edai_encryption(vv[1]):''));
	    	});
	    	postStr = postArr.join('&');
	    	return postStr;
	    }
 	}
function getpwd(user, pwd){
  var formDataStr = "returnurl=aHR0cDovL3d3dy55aWRhaS5jb20vYWJvdXQvaW5kZXguaHRtbA%3D%3D&keywords="+ user + "&password=" + pwd
  return encryptionJs.form_encryption(formDataStr)

}
