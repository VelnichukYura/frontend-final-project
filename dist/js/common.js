(function ($) {
  $(function () {
    var jcarousel = $('.jcarousel-full');

    jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
          width = carousel.innerWidth();
        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      });

    jcarousel.jcarouselAutoscroll({
      interval: 2000
    });

    $('.jcarousel-control-prev')
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .on('click', function (e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function (page) {
          return '<a href="#' + page + '"></a>';
        }
      });
  });
})(jQuery);

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
    .jcarousel({
      wrap: 'circular'
    });

  jcarousel.jcarouselAutoscroll({
    interval: 4000
  });

  jcarousel.hover(function() {
    jcarousel.jcarouselAutoscroll('stop');
  }, function() {
    jcarousel.jcarouselAutoscroll('start');
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
