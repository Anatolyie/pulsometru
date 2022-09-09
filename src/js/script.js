$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.png" alt="arrow"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            // {
            //   breakpoint: 768,
            //   settings: {
            //     dots: true,
            //     arrows: false
            //   }
            // },
            // {
            //   breakpoint: 576,
            //   settings: {
            //     dots: true,
            //     arrows: false
            //   }
            // }
          ]
        });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
      });

    //  $('.catalog__info').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog__wrapper_block').eq(i).toggleClass('catalog__wrapper_block_active');
    //         $('.catalog__wrapper_list').eq(i).toggleClass('catalog__wrapper_list_active');
    //     }); 
    // });

    // $('.catalog__wrapper_link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog__wrapper_block').eq(i).toggleClass('catalog__wrapper_block_active');
    //         $('.catalog__wrapper_list').eq(i).toggleClass('catalog__wrapper_list_active');
    //     });
    // });
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__wrapper_block').eq(i).toggleClass('catalog__wrapper_block_active');
                $('.catalog__wrapper_list').eq(i).toggleClass('catalog__wrapper_list_active');
            }); 
        });
    }

    toggleSlide('.catalog__info');
    toggleSlide('.catalog__wrapper_link');

    // //Modal
        $('[data-modal=consultation]').on('click', function() { 
            $('.overlay, #consultation').fadeIn('slow');
    });
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, thanks, order').fadeOut('slow');
    });
    //     $('.button_catalog').on('click', function() {
    //         $('.overlay, #order').fadeIn('fast');
    //  }); 

     $('.button_catalog').each(function(i) {
          $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
          });
     });

    function validateForms(form){
        $(form).validate({
            rules:{
                username: "required",
                userphone: "required",
                usermail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                username: "Introduceti numele Dvs",
                userphone: "Introduceti numarul Dvs",
                usermail: {
                  required: "Introduceti adresa email",
                  email: "Introduceti o adresa email valida"
                }
              }
        });
    }

    validateForms('#consultation__form');
    validateForms('#consultation form');
    validateForms('#order form');
  });