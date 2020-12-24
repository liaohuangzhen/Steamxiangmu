$("#input1").focus(function() {
	$(this).css("color", "white")
})

var i = $('.liRotation').index();

$('#bossboxRight').on('click', function() {
	if ($('#udb').is(':animated')) {
		console.log("Stop!");
		return false
	}
	i++
	if (i == 5) {
		$('#udb').css('left', 0)
		i = 1
	}
	$('#udb').animate({
		left: -940 * i
	}, 400)

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

})


$('.widtDIV').click(function(){
	$('.active').removeClass('active')
	$(this).addClass('active')
})



