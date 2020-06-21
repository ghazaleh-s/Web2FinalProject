/*nav-scroll*/
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});
/*end of nav-scroll*/

/*gallery-selection*/
$(document).ready(function () {
    $(".filter-all").click(function () {
        $(".gal-item").show("slow");
    });
});
$(document).ready(function () {
    $(".filter-pro").click(function () {
        $("#pro").toggleClass("filter-c");
        $("#new,#all,#free").removeClass("filter-c");
        $(".gal-item").show("slow");
        $(".pro").fadeOut("slow");
    });
});
$(document).ready(function () {
    $(".filter-new").click(function () {
        $("#new").toggleClass("filter-c");
        $("#free,#pro,#all").removeClass("filter-c");
        $(".gal-item").show("slow");
        $(".new").hide("slow");
    });
});
$(document).ready(function () {
    $(".filter-free").click(function () {
        $("#free").toggleClass("filter-c");
        $("#all,#pro,#new").removeClass("filter-c");
        $(".gal-item").show("slow");
        $(".free").fadeOut("slow");
    });
});
/*end of gallery selection*/

/*animation*/
AOS.init();
$('[data-aos]').parent().addClass('hideOverflowOnMobile');
/*end of animation*/


