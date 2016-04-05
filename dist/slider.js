$(function() {

    // Инициализация слайдера

    $('.jcarousel').jcarousel({
        // Базовые настройки скрипта пишутся здесь

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