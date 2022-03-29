$(".projects-container").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 6000,
  // rtl: true,
});

var $one = $(".one"),
  $x_axis = $("#x-axis"),
  $y_axis = $("#y-axis"),
  $container = $("body"),
  container_w = $container.width(),
  container_h = $container.height();

$(window).on("mousemove.parallax", function (event) {
  var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    top = 0,
    bri = 0;

  bri = container_h / 0.25 - pos_y;
  left = container_w / 2 - pos_x;
  top = container_h / 2 - pos_y;

  TweenMax.to($x_axis, 1, {
    css: {
      transform: "translateX(" + left * -1 + "px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });

  TweenMax.to($y_axis, 1, {
    css: {
      transform: "translateY(" + top * -1 + "px)",
    },
    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($one, 1, {
    css: {
      transform:
        "translateX(" + left * -0.06 + "px) translateY(" + top * -0.04 + "px)",
    },

    ease: Expo.easeOut,
    overwrite: "all",
  });
  TweenMax.to($two, 1, {
    css: {
      transform:
        "translateX(" + left * 0.06 + "px) translateY(" + top * 0.04 + "px)",
    },

    ease: Expo.easeOut,
    overwrite: "all",
  });
});
