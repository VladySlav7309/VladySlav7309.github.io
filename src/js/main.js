window.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var viewportwidth;
    var viewportheight;
    console.log(navbar.height);
    if (typeof window.innerWidth != 'undefined')
    {
        viewportwidth = window.innerWidth;
        viewportheight = window.innerHeight;
    }
    $(window).scroll(function () {
      if( ($(window).scrollTop() > (viewportheight) ) && !$('nav.navbar').hasClass('fixed-nav') ) {
          // console.log($('nav.navbar'));
          navbar.className+=' fixed-nav';
      }
      if($(window).scrollTop() < (viewportheight)) {
        navbar.classList.remove('fixed-nav');
      }
    });
      window.sr = ScrollReveal();
      sr.reveal('#aboutMe', {
        duration:800,
        origin:'bottom'
      });
      sr.reveal('#aboutTitle', {
        duration:1000,
        origin:'left',
        distance:"1200px"
      });

      sr.reveal('#article1', {
        duration:1000,
        delay:300,
        origin:'bottom',
        distance:'600px'
      });
      sr.reveal('#article2', {
        duration:1000,
        delay:600,
        origin:'bottom',
        distance:'600px'
      });
      sr.reveal('#article3', {
        duration:1000,
        delay:900,
        origin:'bottom',
        distance:'600px'
      });
      sr.reveal('.aqua', {
        duration:1000,
        origin:'bottom',
        delay:200,
      });
      sr.reveal('.pink', {
        duration:1000,
        origin:'bottom',
        delay:400,
      });
      sr.reveal('.yellow', {
        duration:1000,
        origin:'bottom',
        delay:600,
      });
      sr.reveal('.brown', {
        duration:1000,
        origin:'bottom',
        delay:800,
      });
      sr.reveal('.red', {
        duration:1000,
        origin:'bottom',
        delay:900,
      });
      sr.reveal('#projects', {
        duration:2000,
        origin:'bottom'
      });

  $(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}, false);
