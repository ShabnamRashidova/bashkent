$(window).on('load', function(){ 
    $(".preloader").addClass("hide")
});

$('.banner-carousel').owlCarousel({
    loop: false,
    responsiveClass: true,
    autoPlay:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,

    smartSpeed:450,
    responsive: {
        0: {
            items: 1,

        },

        1000: {
            items: 1,

            loop: false
        }
    }
})
$('.branches-carousel').owlCarousel({
    loop: false,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,

            loop: false
        }
    }
})
$('.partners-carousel').owlCarousel({
    loop: false,
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        700: {
            items: 2
        },
        900: {
            items: 3,
        },
        1200: {
            items: 5,

            loop: false
        },

    }
})
$('.blog-carousel').owlCarousel({
    loop: false,
    margin: 20,
    responsiveClass: true,
    autoPlay: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3
        }
    }
})
$('.testimonial-carousel').owlCarousel({
    loop: false,
    margin: 40,

    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },

        1000: {
            items: 1,

            loop: false
        }
    }
})
$(".nav-menu-btn").on("click", () => {
    $(".header-bottom-content").addClass("opened")
});
$(".menu-close-icon").on("click", () => {
    $(".header-bottom-content").removeClass("opened");
});
$(".bg-overlay").on("click", () => {
    $(".header-bottom-content").removeClass("opened");;
});
$(".search-btn-mobile").on("click", () => {
    
    $(".form-content-overlay").addClass("show");
  
});
$(".close-search-area").on("click",()=>{
    $(".form-content-overlay").removeClass("show");
    
})
// Fancybox Config



$(window).on("scroll",function(){
   if(  $(this).scrollTop()>=120){
    $(".header-fixed").addClass("show")
    $(".up-btn").addClass("show") 
    $(".up-btn").on("click",function(){
        $(window).scrollTop(0)
    }) 
   }else{
    $(".up-btn").removeClass("show")
    $(".header-fixed").removeClass("show")
   }
  
    
})
var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });
  lazyLoadInstance.update();