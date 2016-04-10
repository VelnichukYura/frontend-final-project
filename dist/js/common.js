/**
 * Created by Alina on 05.04.2016.
 */
(function ($) {
  $(function () {
    var jcarousel = $('.jcarousel').jcarousel();

    jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
        var carousel = $(this),
          width = carousel.innerWidth();

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      });

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

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination({
        'item': function (page, carouselItems) {
          return '<a href="#' + page + '"></a>';
        }
      });
  });
})(jQuery);

$(function () {
  $("#tabs").tabs();
});

(function($) {
  $(function() {
    productsCarousel('products-hot');
    productsCarousel('products-designers');
    productsCarousel('products-featured');
    productsCarousel('products-latest');
  });
})(jQuery);

function productsCarousel(id) {
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

  $('#-prev-' +id)
    .jcarouselControl({
      target: '-=1'
    });

  $('#-next-' + id)
    .jcarouselControl({
      target: '+=1'
    });
};
