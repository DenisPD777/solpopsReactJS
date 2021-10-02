import $ from 'jquery';
//Hide arrow when scroll down
$(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 150);
});
//Change navbar to white
$(function () {
    if ($(window).width() > 770) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    } else
        $('.navbar').removeClass('active');
});

//Hide navbar when user clicks on link
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

//CountdownTimer
const countDownDate = new Date("Oct 5, 2021 00:00:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timerOnImage").innerHTML = days + "d " + hours + "h "
        + minutes + "m";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerOnImage").innerHTML = "EXPIRED";
    }
}, 100);

//FAQ Animation
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

//Prevent images from copying
let allImages = document.querySelectorAll("img");
allImages.forEach((value) => {
    value.oncontextmenu = (e) => {
        return false;
    }
})

//When click on arrow to scroll bottom
$(".arrow").click(function () {
    let windowWidth = $(window).width();
    if (windowWidth < 460) {
        $('body, html').animate(
            {
                scrollTop: '+=250px'
            },
            300
        );
    } else {
        $('body, html').animate(
            {
                scrollTop: '+=535px'
            },
            300
        );
    }
    return false;
});

//Scroll to a specific element
$(".about-link").click(function() {
    if ($(window).width() < 460) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-section").offset().top - 100
        }, 500);
    }
    else {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-section").offset().top - 300
        }, 500);
    }
});

$(".faq-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#faq-container").offset().top - 200
    }, 500);
});