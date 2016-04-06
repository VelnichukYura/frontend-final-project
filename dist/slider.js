$(function() {

    // Инициализация слайдера

    $('.jcarousel')
        .on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();

            if (width > 1200) {
                width = width / 1;
            } else if (width < 600) {
                width = width / 1 ;
            }

            element.jcarousel('items').css('width', width + 'px');
        })

        .jcarousel({
            // Your configurations options
        });

    // Инициализация прокрутки слайдера

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
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