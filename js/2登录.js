$("#button").click(function(){
	if($("#input2").val()==""){
		alert("因为人丑，无法登录")
	}
	
	// var Obj = /^[a-zA-Z]\w{3,15}
	// var i = document.getElementById("input2").value;
	// if(Obj.text(i)){
	// 	alert("A")
	// }else{
	// 	alert("B")
	// }
	
	
})


$(document).mouseup(function () { 
	if (6>5) {
		// 获取当前页面的宽度（考虑兼容性）
		var width= 
		window.innerWidth||
		document.documentElement.clientWidth||
		document.body.clientWidth;   
	
		//获取当前页面的高度
		var height = 
		window.innerHeight||
		document.documentElement.clientHeight||
		document.body.clientHeight;
	
		console.log(document.body.clientWidth)
	}
});



//当浏览器窗口大小改变时，触发 window.onresize事件
// window.onresize=function(){  
// 	//如果页面宽度小于900 $("body").eq(0) 隐藏 $("body").eq(1)显示
// 	if (window.innerWidth<900) {
// 		$("#BOSS").eq(0).hide()
// 		$("#ws").show()
// 	}else{
// 		//如果页面宽度不小于900 $("body").eq(1) 隐藏 $("body").eq(0)显示
// 		$("#ws").show()
// 		$("#BOSS").eq(0).show()
// 	}
// } 

	
