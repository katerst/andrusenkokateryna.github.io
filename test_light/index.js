document.addEventListener('DOMContentLoaded', function () {
$(function() {
	$('.toggles button').click(function(){
		var get_id=this.id;
		var get_current=$('.posts .' + get_id);


		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});
});
$(document).ready(function() {
		$('.clients-carousel').slick({
			arrows:true,
			autoplay:false,
		});
	});

});