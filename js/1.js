$("#input1").focus(function() {
	//搜索框的字为白色
	$(this).css("color", "white")
})


var i = $('.liRotation').index();
$('.widtDIV').click(function(){
	//删除其他class为active的active的class
	$('.active').removeClass('active')

	//添加当前class为active的class
	$(this).addClass('active')
})


$('.widtDIV').eq(0).click(function (e) { 
	$('#udb').animate({
		left:0
	},400)

	//设置i的值说不出来
	i=0

	
});

$('.widtDIV').eq(1).click(function (e) { 
	$('#udb').animate({
		left:-940
	},400)

	i=1

});

$('.widtDIV').eq(2).click(function (e) { 

	$('#udb').animate({
		left:-940*2
	},400)

	i=2
});

$('.widtDIV').eq(3).click(function (e) { 

	$('#udb').animate({
		left:-940*3
	},400)

	i=3
});
$('#bossboxRight').on('click', function() {
	//#bossboxRight如果动画中，终止处理
	if ($('#udb').is(':animated')) {
		console.log("Stop!");
		return false

	// retrun true； 返回正确的处理结果。

	// return false；分会错误的处理结果，终止处理。

	// return；把控制权返回给页面。
	}
	i++
	//在这里我们的第一和第五为同一个li 
	//到第五个的时候回到0
	//让i=1，可以重新开始动画
	if (i == 5) {
		$('#udb').css('left', 0)
		i = 1
	}


	$('#udb').animate({
		left: -940 * i
	}, 400)
	

	//如果i为1则
	switch (i) {
		case 4:
				$('.active').removeClass('active')

				$('.widtDIV').eq(0).addClass('active')
			break;
		case 1:
				$('.active').removeClass('active')

				$('.widtDIV').eq(1).addClass('active')
			break;
		case 2:
				$('.active').removeClass('active')

				$('.widtDIV').eq(2).addClass('active')
			break;
		case 3:
				$('.active').removeClass('active')

				$('.widtDIV').eq(3).addClass('active')
			break;
	}

	//↓没有用的测试↓
	if (6 > 1) {
		console.log(i)
	}
})


$('#bossbox').on('click', function() {
	if ($('#udb').is(':animated')) {
		console.log("Stop!");
		return false
	}
	i--

	if (6 > 1) {
		console.log(i)
	}

	if (i == -1) {
		$('#udb').css('left', -3760)
		i = 3
	}
	$('#udb').animate({
		left: -940 * i,
	}, 400)

	switch (i) {
		case 4:
				$('.active').removeClass('active')

				$('.widtDIV').eq(0).addClass('active')
			break;
		case 0:
				$('.active').removeClass('active')

				$('.widtDIV').eq(0).addClass('active')
			break;
		case 1:
				$('.active').removeClass('active')

				$('.widtDIV').eq(1).addClass('active')
			break;
		case 2:
				$('.active').removeClass('active')

				$('.widtDIV').eq(2).addClass('active')
			break;
		case 3:
				$('.active').removeClass('active')

				$('.widtDIV').eq(3).addClass('active')
			break;
	}
})


// 轮播图 二
var NB = $('.NaviBox').index()
$('.ButRIGHT').click(function(){
	NB++
	console.log(NB)
})












// JSON

// var sxf=[{
// 	"name":"a",
// 	"kiss":[0,1,2,3,8,5]
// },{
// 	"name":"b",
// 	"kiss":[0,1,2,3,8,5]
// }];

// console.log(sxf[0].wsc[4])
// var jsjson = JSON.parse(sxf);
// console.log(json)