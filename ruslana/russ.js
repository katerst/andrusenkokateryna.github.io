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
	})
