$(document).ready(function() {
  // magnific popup function call for work section
  $('.img-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
      enabled:true
    }
  });
  // owlCarousel function call - logo

  $('#logo').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed:4000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
  // owlCarousel function call - work

  $('#owl-work').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed:4000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }

});  
// navbar transition
    $(window).scroll(function () {  
        var location = $(window).scrollTop();
        if (location<70) {
            $("nav").removeClass("transparent");
        }else{
            $("nav").addClass("transparent");
        }
    });













    // owlCarousel function call - quotes

    $('#customers').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:1700,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      });  
    

});

// This will create a single gallery from all elements that have class "gallery-item"
/* $('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
}); */