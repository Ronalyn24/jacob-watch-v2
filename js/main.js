headerScroll = function () {

    $ = jQuery.noConflict();

    $(window).scroll(function () {
        $(window).scrollTop() >= 300 ? $('html').addClass('header-scroll') : $('html').removeClass('header-scroll') 
    });
}

bugherAnimation = function () {

    $ = jQuery.noConflict();

    $('.menu-bar-icon').click(function () {
        $('html').toggleClass('open-menu');
    });

    $('.header__menu .header__menu-item a').click(function () {
        $('html').toggleClass('open-menu');
    });
}

getStartedTab = function () {

    $ = jQuery.noConflict();

    $('.imageBox__innerItem').click(function () {
        var tab_id = $(this).attr('data-tab-item');
    
        $('.imageBox__innerItem').removeClass('active');
        $('.watchModel__img').removeClass('active');
    
        $(this).addClass('active');
        $("#data-tab-content-" + tab_id).addClass('active');
    });
}


bannerSlider = function () {

  $ = jQuery.noConflict();

  var $carousel = $('.banner-carousel').flickity({
      freeScroll: true,
      wrapAround: false,
      autoPlay: false,
      cellSelector: '.carousel-cell',
      cellAlign: 'left',
      prevNextButtons: false,
      pageDots: false,
      groupCells: 1
  });

  // previous
  $('.button--previous').on('click', function () {
      $carousel.flickity('previous');
  });

  // next
  $('.button--next').on('click', function () {
      $carousel.flickity('next');
  });

  $carousel.flickity();

}

jQuery(document).ready(headerScroll);
jQuery(document).ready(bugherAnimation);
jQuery(document).ready(getStartedTab);
jQuery(document).ready(bannerSlider);
