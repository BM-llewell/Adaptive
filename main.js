$(".menu-open").click(function() {
	$(".main-menu").toggleClass('active');
	$(".container").toggleClass('cactive');
	$(".open-burger").toggleClass('bactive');
})

// $(document).keydown(function(e) {
// 	if(e.keyCode == 77) {
// 		$(".main-menu").toggleClass('active');
// 		$(".container").toggleClass('cactive');
// 		$(".open-burger").toggleClass('bactive');
// 	}
// })