window.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var viewportwidth;
    var viewportheight;
    if (typeof window.innerWidth != 'undefined')
    {
        viewportwidth = window.innerWidth;
        viewportheight = window.innerHeight;
    }
    $(window).scroll(function () {
        if($(window).scrollTop() > (viewportheight )) {
          navbar.className+=' fixed-nav';
        }
        else {
          navbar.classList.remove('fixed-nav');
        }
    });

}, false);
