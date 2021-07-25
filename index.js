$(document).ready(function(){
	$('.nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.container-mobile').toggleClass('open');
		$('body').toggleClass('no-scroll');
	});	
	
});

let mainNavLinks = document.querySelectorAll("nav.in-page ul li a");
let mainSections = document.querySelectorAll("wrapper section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

console.log("I'm working");