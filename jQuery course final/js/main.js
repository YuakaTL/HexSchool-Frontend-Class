$(function () {
    // Go Top
    $(".goTop").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

    // Dropdown
    $('.dropdownBtn').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().find('.dropdownList').stop().slideToggle();
        $(this).parent().siblings().find('.dropdownList').slideUp();
    })
    $("body:not(.dropdownBtn)").click(function () {
        $(".dropdownList").slideUp("slow");
    });

    // Swiper
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // Lightbox
    lightbox.option({
        wrapAround: true,
        resizeDuration: 500
    });

});