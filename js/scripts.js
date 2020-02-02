function getArrowsPosition() {
    $('.goods_slider').each(function() {
        sliderName = $(this).attr("data-slider");
        if( $("[data-slider-arrows] .slick-arrow").length == 0 ) {
            $("[data-slider-arrows = '"+ sliderName +"'").append($(this).find(".slick-arrow"));
        }
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var maxRate,
    setRate;


$(window).load(function() {
    getArrowsPosition();
});

$(window).resize(function() {
    getArrowsPosition();
});

$(document).scroll(function() {
    getArrowsPosition();
});

$(document).ready(function() {

    if( $(".big_slider").length > 0 ) {
        $(".big_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: $(".miniature_slider")
        });


        $(".miniature_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: $(".big_slider"),
            focusOnSelect: true,
            verticalSwiping: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    verticalSwiping: false,
                    vertical: false
                  }
                },
                {
                  breakpoint: 430,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    verticalSwiping: false,
                    vertical: false
                  }
                },
                {
                  breakpoint: 350,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    verticalSwiping: false,
                    vertical: false
                  }
                }
              ]
        });

    }

    if( $(".goods_slider").length > 0 ) {

        var sliderName;

        $(".goods_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1124,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    }    

    $(".rating").each(function(e) {
        maxRate = parseInt($(this).attr("data-max-rate"));
        setRate = parseInt($(this).attr("data-rate"));
        for(var i = 0; i <= maxRate - 1; i++) {
            if(i < setRate) {
                $(this).append("<img src='img/full_star.svg' alt='star' />");
            } else {
                $(this).append("<img src='img/empty_star.svg' alt='star' />");
            }
        }
    });

    // -------------

    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 1;
        }
        countInput.val(countVal);
    });

    // ---------------

  var defaultHeight,
      name,
      defaultHeight,
      innerHeight;

    $(".dropdown_box").each(function() {
      if(!$(this).hasClass("active")) {
        defaultHeight = parseInt( $(this).attr("data-defaultheight") );
        $(this).outerHeight(defaultHeight);
      }
    });

    $("[data-dropdown-btn]").on("click", function(e) {
      e.preventDefault();
      name = $(this).attr("data-dropdown-btn");
      parentBlock = $("[data-dropdown-box = '"+ name +"']");
      defaultHeight = parseInt( parentBlock.attr("data-defaultheight") );
      innerHeight = parentBlock.find(".inner_height").outerHeight();
      if(parentBlock.outerHeight() < innerHeight) {
          parentBlock.animate({
            "height" : innerHeight + "px"
          }, 300);
            setTimeout(function() {
                parentBlock.css({
                    "height" : "auto"
                });
            }, 500);
          $(this).addClass("active");
      } else {
          parentBlock.animate({
              "height" : defaultHeight + "px"
          }, 300);
          $(this).removeClass("active");
      }
    });

});



