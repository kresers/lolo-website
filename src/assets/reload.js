$('#accueil').on('click',function () {
    var _tg_homeslider = $('#tg-homeslider');
    _tg_homeslider.owlCarousel('destroy');

    _tg_homeslider.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        animateOut: 'fadeOut',
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
        ],
        navClass: [
            'tg-btnroundprev',
            'tg-btnroundnext'
        ]
    });
    _tg_homeslider.owlCarousel(); // created

    var _tg_counters = jQuery('#tg-statisticscounters');
    _tg_counters.appear(function () {
        var _tg_counter = jQuery('.tg-counter > h2 > span');
        _tg_counter.countTo();
    });

    var _tg_btnsectionscroll = jQuery('.tg-btnsectionscroll');
    _tg_btnsectionscroll.on('click', function (event) {
        event.preventDefault();
        console.log('clicked');
        var offset = 2;
        jQuery('html, body').animate({
            scrollTop: jQuery("#tg-main").offset().top + offset
        }, 2000);
    });
});

$('#evenement').on('click',function () {
    var $container = jQuery('.tg-galleryfilterable');
    var $optionSets = jQuery('.tg-optionset');
    var $optionLinks = $optionSets.find('a');

    function doIsotopeFilter() {
        if (jQuery().isotope) {
            var isotopeFilter = '';
            $optionLinks.each(function () {
                var selector = jQuery(this).attr('data-filter');
                var link = window.location.href;
                var firstIndex = link.indexOf('filter=');
                if (firstIndex > 0) {
                    var id = link.substring(firstIndex + 7, link.length);
                    if ('.' + id == selector) {
                        isotopeFilter = '.' + id;
                    }
                }
            });
            jQuery(window).load(function () {
                $container.isotope({
                    itemSelector: '.tg-masonrygrid',
                    filter: isotopeFilter
                });
            });
            $optionLinks.each(function () {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                if (selector == isotopeFilter) {
                    if (!$this.hasClass('tg-active')) {
                        var $optionSet = $this.parents('.option-set');
                        $optionSet.find('.tg-active').removeClass('tg-active');
                        $this.addClass('tg-active');
                    }
                }
            });
            $optionLinks.on('click', function () {
                var $this = jQuery(this);
                var selector = $this.attr('data-filter');
                $container.isotope({itemSelector: '.tg-masonrygrid', filter: selector});
                if (!$this.hasClass('tg-active')) {
                    var $optionSet = $this.parents('.tg-optionset');
                    $optionSet.find('.tg-active').removeClass('tg-active');
                    $this.addClass('tg-active');
                }
                return false;
            });
        }
    }

    var isotopeTimer = window.setTimeout(function () {
        window.clearTimeout(isotopeTimer);
        doIsotopeFilter();
        /* -------------------------------------
                MASONRY GALLERY
        -------------------------------------- */
        var _tg_masnorygallery = jQuery('#tg-masnorygallery');
        _tg_masnorygallery.packery({
            itemSelector: '.tg-masonryitem',
            columnWidth: 0,
        });
    }, 1000);
    /* -------------------------------------
            PRETTY PHOTO GALLERY
    -------------------------------------- */
    jQuery("a[data-rel]").each(function () {
        jQuery(this).attr("rel", jQuery(this).data("rel"));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    /* ---------------------------------------
            GALLERY HOVER
    --------------------------------------- */
    jQuery(function () {
        jQuery('.tg-gallery').each(function () {
            jQuery(this).hoverdir({
                hoverDelay: 75,
            });
        });
    });

});