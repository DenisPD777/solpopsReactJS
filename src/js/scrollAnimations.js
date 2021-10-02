import $ from 'jquery';
// Back To Top button
const amountScrolled = 100;
$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $(".backToTop").addClass("show");
    } else {
        $(".backToTop").removeClass("show");
    }
});

$(".backToTop").click(function () {
    $("body,html").animate(
        {
            scrollTop: 0
        },
        700
    );
    return false;
});

window.onload = function () {
    const second_part = document.getElementById('dev-name');
    second_part.innerHTML = 'SDC Labs';
}

