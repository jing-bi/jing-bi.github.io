// import './aos';
// AOS.init();
// AOS.init();

// $(document).onreadystatechange = function () {

//     if (document.readyState == 'complete') {
//         AOS.refresh();
//     }
// }

$(document).ready(function () {
    $('.projects>div').attr("data-aos", "zoom-in-left");
    $('.services>div').attr("data-aos", "zoom-in-up");
    $('.about').attr("data-aos", "zoom-in-right");
    AOS.init();
});

$(document).ready(function () {
    //----- OPEN
    $('[data-popup-open]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
})

// ==================================================       PROJECT
$(document).ready(function () {
    $('.projects>div').hover(
        function () {
            $(this).css('box-shadow', '0px 100px 100px 0px rgba(0, 0, 0, 0.3)')

        },
        function () {
            $(this).css('box-shadow', '0px 10px 50px 0px rgba(0, 0, 0, 0.17)')
        });

});
$(document).ready(function () {

    $('.projects>div').tilt({
        glare: true,
        maxGlare: .5,
        scale: 1.025,
        maxTilt: 5,
        transition: true,
        speed: 1000,
        // perspective: 1100,
        // easing: "cubic-bezier(0.22, 0.67, 0.46, 0.98)",

    });

});
// ==================================================       SERVICE
$(document).ready(function () {
    $('.services>div').hover(
        function () {
            $(this).css('box-shadow', '0px 10px 100px 0px rgba(0, 0, 0, 0.15)')

        },
        function () {
            $(this).css('box-shadow', '0px 10px 50px 0px rgba(0, 0, 0, 0.17)')
        });

});
$(document).ready(function () {
    $('.services>div').tilt({
        glare: true,
        maxGlare: .5,
        scale: 1.025,
        maxTilt: 5,
        transition: true,
        speed: 1000,
        // perspective: 1100,
        // easing: "cubic-bezier(0.22, 0.67, 0.46, 0.98)",
    });
});
// ==================================================       ABOUT
$(document).ready(function () {
    $('.about').tilt({
        glare: true,
        maxGlare: .5,
        scale: 1.025,
        maxTilt: 5,
        transition: true,
        speed: 1000,
        // perspective: 1100,
        // easing: "cubic-bezier(0.22, 0.67, 0.46, 0.98)",
    });
});

// ==================================================       selfie
$(document).ready(function () {

    $('.selfie').tilt({
        scale: 1.025,
        maxTilt: 5,
        transition: true,
        speed: 1000,
        // perspective: 1100,
        // easing: "cubic-bezier(0.22, 0.67, 0.46, 0.98)",

    });

});



var maxScroll = 500;
var scaleExtent = 40;
var blurExtent = 20;
var viewportFromTop = $(window).scrollTop();

//hero-content should not show when page loads and the viewport is beyond maxScroll
if (viewportFromTop > maxScroll) {
    $(".fixed").css({
        'opacity': '0'
    });
}

//when the page loads, the hero-content should load appropriately (should work before scrolling starts)

//preparing scale transform
var scale = 1 - (viewportFromTop / (maxScroll * scaleExtent));

//preparing opacity
var opacity = 1 - (viewportFromTop / maxScroll);

//preparing blur
if (viewportFromTop > 100) {
    var blur = ((viewportFromTop * blurExtent) / maxScroll) - 5;
} else {
    var blur = 0;
}
$(".fixed").css({
    'transform': 'scale(' + scale + ')',
    'opacity': opacity,
    'filter': 'blur(' + blur + 'px)'
});

$(document).ready(function () {
    $(window).scroll(function () {
        var fromTop = $(this).scrollTop();

        //the transforms should only happen till maxScroll
        if (fromTop <= maxScroll) {
            $(".fixed").css({
                'opacity': '1'
            });

            //preparing scale transform
            var scale = 1 - (fromTop / (maxScroll * scaleExtent));

            //preparing opacity
            var opacity = 1 - (fromTop / maxScroll);

            //preparing blur
            if (fromTop > 100) {
                var blur = ((fromTop * blurExtent) / maxScroll) - 5;
            } else {
                var blur = 0;
            }

            //applying them to hero-content
            $(".fixed").css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity,
                'filter': 'blur(' + blur + 'px)'
            });
        } else {
            $(".fixed").css({
                'opacity': '0'
            });
        }
    });
});



$(document).ready(function () {
    $(".gif").hover(

        function () {


            // $(this).fadeOut();

            var src = $(this).attr("src");
            // var hover = $(this).attr("src", src.replace(/\.png$/i, ".gif"));
            // $(this).fadeOut(100);
            // hover.fadeIn(200);
            // $(this).fadeOut('fast', function () {
            //     hover.fadeIn('fast');
            // });

            $(this).attr("src", src.replace(/\.png$/i, ".gif"));


            // $(this).fadeOut()

        },
        function () {


            // $(this).fadeIn();

            var src = $(this).attr("src");
            $(this).attr("src", src.replace(/\.gif$/i, ".png"));

        });
});