(function ($, Drupal) {
  Drupal.behaviors.slideshowBehavior = {
    attach: function (context, settings) {

      $('.view-at-view-cover-page-slideshow .view-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1012,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 797,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.view-at-view-cover-page-slideshow').css('opacity', '1');

      function change_background_image() {

        images = new Array('nature', 'nature2', 'nature3', 'nature4');

        var new_image = images[Math.floor(Math.random()*images.length)];

        var image_url = $('.view-at-view-cover-page-slideshow').css('background-image');

        image_url = image_url.replace('linear-gradient(rgba(255, 255, 255, 0.5) 0px, rgba(255, 255, 255, 0.5) 100%), url("', '');
        image_url = image_url.replace('linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%), url("', '');
        image_url = image_url.replace('")', '');

        image_url_parts = image_url.split('/');
        image_name = image_url_parts[image_url_parts.length - 1];
        image_name = image_name.replace('.jpg', '');

        image_url = image_url.replace(image_name, new_image);

        $('.view-at-view-cover-page-slideshow').css('background-image', 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%), url("' + image_url + '")');

        setTimeout(change_background_image, 6000);
      }
      // use setTimeout() to execute
      setTimeout(change_background_image, 6000);

      $(window).resize(function () {
        $('.js-slider').not('.slick-initialized').slick('resize');
      });

      $(window).on('orientationchange', function () {
        $('.js-slider').not('.slick-initialized').slick('resize');
      });
    }
  };
})(jQuery, Drupal);