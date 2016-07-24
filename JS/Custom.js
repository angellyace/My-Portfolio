/**
 * Created by Huehue on 6/8/2016.
 */
/***/


/**Resize panel height if the window is resized**/
// $(window).resize(function() {
//     $('.custom-panel').height($(window).height());
//
// });
//
// $(window).trigger('resize');
//

window.onload = function () {

    $('.custom-panel').height($(window).height());



    $(".scroll").click(function (event) {
        event.preventDefault();
        //calculate destination place
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        //go to destination
        $('html,body').animate({scrollTop: dest}, 1000, 'swing');
    });
}

particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});






//
// $(document).ready(function(){
//
//     $('body').on({
//         'mousewheel': function(e) {
//             if (e.target.id == 'custom-panel') return;
//             e.preventDefault();
//             e.stopPropagation();
//         }
//     })
//
// });


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("main").style.marginLeft = "10%";
    document.getElementById('OpenSidebar').style.visibility = "hidden";
    // document.getElementById('page1-text').style.marginLeft="5%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#OpenSidebar").css('visibility', 'visible').hide().show(500);
    //document.getElementById('page1-text').style.marginLeft="10%";
}

function OnLinkClick(btn) {

    document.getElementById("btnAbout").style.color = "#ffffff";
    document.getElementById("btnPortfolio").style.color = "#ffffff";
    document.getElementById("btnContact").style.color = "#ffffff";


    if (btn == document.getElementById("btnAbout")) {
        btn.style.color = "#b4fbff";
    } else if (btn == document.getElementById("btnPortfolio")) {
        btn.style.color = "#ffe5b4";
    } else if (btn == document.getElementById("btnContact")) {
        btn.style.color = "#ffc6b4";
    }

}

function OnClickViewWebsites() {
    $("#OpenSidebar").hide(100);
    $("#view-works").css('visibility', 'visible').hide().show(500);
    $("#list-website").css('visibility', 'visible').hide().show();
    $('#main').css('overflow','hidden')
}

function OnClickViewFullAppGrade() {
    $("#view-full-website-appgrade").css('visibility', 'visible').hide().show(500);
    $(".custom-panel").hide();
}

function OnClickViewFullHappyDental() {
    $(".custom-panel").hide();
    $("#view-full-website-happydental").css('visibility', 'visible').hide().show(500);
}

function OnClickViewFullHappyFeet() {
    $(".custom-panel").hide();
    $("#view-full-website-happyfeet").css('visibility', 'visible').hide().show(500);
}

function OnClickCloseFullWebsite(){
    $(".view-full-website").hide(500);
    $(".custom-panel").show();
}


function OnClickViewPhotographs() {
    $("#OpenSidebar").hide(100);
    $("#view-works").css('visibility', 'visible').hide().show(500);
    $("#list-photographs").css('visibility', 'visible').hide().show();
}

function OnClickViewCreativity() {
    $("#OpenSidebar").hide(100);
    $("#view-works").css('visibility', 'visible').hide().show(500);
    $("#list-creativity").css('visibility', 'visible').hide().show();
}

function OnClickCloseViewWebsites() {
    $("#view-works").hide(500);
    $("#OpenSidebar").show(100);
    $("#list-website").hide();
    $("#list-photographs").hide();
    $("#list-creativity").hide();
}

// // Stop carousel autoplay
$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});

// Function to swipe projects
//
// document.addEventListener("DOMContentLoaded", function () {
//     var container = document.getElementById("list-websites");
//     dragend = new Dragend(container, {
//         afterInitialize: function () {
//         }
//     });
// }, false)
//
// document.addEventListener("DOMContentLoaded", function () {
//     var container = document.getElementById("list-photographs");
//     dragend = new Dragend(container, {
//         afterInitialize: function () {
//         }
//     });
// }, false)
//
// document.addEventListener("DOMContentLoaded", function () {
//     var container = document.getElementById("list-creativity");
//     dragend = new Dragend(container, {
//         afterInitialize: function () {
//         }
//     });
// }, false)
//
// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-219062-10']);
// _gaq.push(['_trackPageview']);
//
//
// (function () {
//     var ga = document.createElement('script');
//     ga.type = 'text/javascript';
//     ga.async = true;
//     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(ga, s);
// })();
//





