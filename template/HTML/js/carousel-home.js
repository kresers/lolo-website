




var _tg_homeslider = jQuery('#tg-homeslider');
_tg_homeslider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    animateOut: 'fadeOut',
    navText: [
        '<i class="icon-arrow-left"></i>',
        '<i class="icon-arrow-right"></i>',
    ],
    navClass: [
        'tg-btnroundprev',
        'tg-btnroundnext'
    ]
});