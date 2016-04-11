$(function() {

    // Инициализация слайдера

    $('.jcarousel')
        .on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();

            // This shows 1 item at a time.
            // Divide `width` to the number of items you want to display,
            // eg. `width = width / 3` to display 3 items at a time.
            element.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    // Инициализация прокрутки слайдера

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    // Инициализация пагинации слайдера

    $('.jcarousel-pagination')

        // Триггер класса active

        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })

        // Инициализация пагинации

        .jcarouselPagination({
            item: function(page) {
                return '<a href="#' + page + '"></a>';
            }

        });
});


$(function () {
    $("#tabs").tabs();
});

(function ($) {
    $(function () {
        productsCarousel('products-hot');
        productsCarousel('products-designers');
        productsCarousel('products-featured');
        productsCarousel('products-latest');
    });
})(jQuery);

function productsCarouselDesigners(id) {
    id = 'products-designers';
    var jcarouselDesigners = $('#' + id);

    jcarouselDesigners
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    jcarouselDesigners.jcarouselAutoscroll({
        interval: 2000
    });

    $('#-prev-' + id)
        .jcarouselControl({
            target: '-=1'
        });

    $('#-next-' + id)
        .jcarouselControl({
            target: '+=1'
        });
};

function productsCarousel(id) {
    id = 'products-hot';
    var jcarousel = $('#' + id);

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    jcarousel.jcarouselAutoscroll({
        interval: 2000
    });

    $('#-prev-' + id)
        .jcarouselControl({
            target: '-=1'
        });

    $('#-next-' + id)
        .jcarouselControl({
            target: '+=1'
        });
};