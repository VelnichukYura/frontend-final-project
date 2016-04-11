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