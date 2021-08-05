$(document).ready(function(){
	$('.nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.container-mobile').toggleClass('open');
		$('body').toggleClass('no-scroll');
	});	
	
	$('.in-page li').click(function(){
    $('.in-page li').each(function() {
      $(this).removeClass('active');
    })
    let c = $(this).attr('class').replace('anchor-', '');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $('#'+c).position().top
  }, 1000);
	});	

  let activateOn = 120;
  document.addEventListener('scroll', function (event) {
    $('section.case-study').each(function() {
      let section = $(this).attr( 'id' );
      let id = '#' + section;
      let pos = $(id).position();
      let scrollTop = $(window).scrollTop();
      let diff = pos.top - scrollTop;
      let height = $(id).height();
      if (diff <= activateOn && diff >= (height * -1)) {
        $('.in-page li').each(function() {
          $(this).removeClass('active');
        })
        $('li.anchor-' + section).addClass('active');
      }
  
    })
  }, true);
});

// let mainNavLinks = document.querySelectorAll("nav.in-page ul li a");
// let mainSections = document.querySelectorAll("wrapper section");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add("current");
//     } else {
//       link.classList.remove("current");
//     }
//   });
// });

console.log("I'm working");