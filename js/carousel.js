const carousel_slick = () => {
  $(".responsive-carousel").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
  });

  $(".single-carousel").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
};

export {carousel_slick};
