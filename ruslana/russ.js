var btn=document.querySelector('.buttoncl'),
	modal = document.querySelector('.modaln'),
	closeBtn= document.querySelector('.closeBtnn');

	btn.addEventListener('click', function(){
		modal.style.display='flex';
	})

	closeBtn.addEventListener('click', function(){
		modal.style.display='none';
	})

	window.addEventListener('click', function(e){
		if(e.target==modal){
			modal.style.display='none';
		}
	});
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка отправлена, мы свяжемся с Вами в течении 5 минут");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
