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
!function(window){
    var $q = function(q, res){
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q,'f:b');
            for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
              l[b].currentStyle.f && c.push(l[b]);
  
            a.removeRule(0);
            res = c;
          }
          return res;
        }
      , addEventListener = function(evt, fn){
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
        }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
      ;
  
    function loadImage (el, fn) {
      var img = new Image()
        , src = el.getAttribute('data-src');
      img.onload = function() {
        if (!! el.parent)
          el.parent.replaceChild(img, el)
        else
          el.src = src;
  
        fn? fn() : null;
      }
      img.src = src;
    }
  
    function elementInViewport(el) {
      var rect = el.getBoundingClientRect()
  
      return (
         rect.top    >= 0
      && rect.left   >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    }
  
      var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function(){
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {
                  images.splice(i, i);
                });
              }
            };
          }
        ;
      // Array.prototype.slice.call is not callable under our lovely IE8 
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      };
  
      processScroll();
      addEventListener('scroll',processScroll);
  
  }(this);