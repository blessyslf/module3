import $ from 'jquery';
$(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaSpeed: 2000,
    dots: false,
    centerMode: true,
    centerPadding: '0',
  })
})
