$(document).ready(function() {
	$('body').css("display", "none").fadeIn(1700);
	
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});

function Scroll(){
	var topIntr=document.getElementById('le');
	var ypos=window.pageYOffset;
	if(ypos>175){
		topIntr.style.opacity="1";
	}
	else{
		topIntr.style.opacity="0";
	}
}

window.addEventListener("scroll",Scroll);
