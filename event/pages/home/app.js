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
	var topIntro1=document.getElementById('icon1');
	var topIntro2=document.getElementById('icon2');
	var topIntro3=document.getElementById('icon3');
	var topIntro4=document.getElementById('icon4');
	var topIntro5=document.getElementById('text1');
	var topIntro6=document.getElementById('text2');
	var topIntro7=document.getElementById('text3');
	var topIntro8=document.getElementById('text4');
	var ypos=window.pageYOffset;
	if(ypos>300){
		topIntro1.style.opacity="1";
		topIntro2.style.opacity="1";
		topIntro3.style.opacity="1";
		topIntro4.style.opacity="1";
		topIntro5.style.opacity="1";
		topIntro6.style.opacity="1";
		topIntro7.style.opacity="1";
		topIntro8.style.opacity="1";
	
	}
	else{
		topIntro1.style.opacity="0";
		topIntro2.style.opacity="0";
		topIntro3.style.opacity="0";
		topIntro4.style.opacity="0";
		topIntro5.style.opacity="0";
		topIntro6.style.opacity="0";
		topIntro7.style.opacity="0";
		topIntro8.style.opacity="0";
		
	}
}

function Scroll2(){
	var topIntr=document.getElementById('sect2');
	var ypos=window.pageYOffset;
	if(ypos>800){
		topIntr.style.opacity="1";
	}
	else{
		topIntr.style.opacity="0";
	}
}

function Scroll3(){
	var topInt=document.getElementById('sect3');
	var ypos=window.pageYOffset;
	if(ypos>1100){
		topInt.style.opacity="1";
	}
	else{
		topInt.style.opacity="0";
	}
}
window.addEventListener("scroll",Scroll2);
window.addEventListener("scroll",Scroll3);

window.addEventListener("scroll",Scroll);