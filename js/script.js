$('.banner-carousel').owlCarousel({
    loop:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        1000:{
            items:1,
            
            loop:false
        }
    }
})
$('.branches-carousel').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        1000:{
            items:3,
            
            loop:false
        }
    }
})
$('.partners-carousel').owlCarousel({
    loop:false,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        1000:{
            items:5,
            
            loop:false
        }
    }
})
$('.blog-carousel').owlCarousel({
    loop:false,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        1000:{
            items:3,
            
            loop:false
        }
    }
})
$('.testimonial-carousel').owlCarousel({
    loop:false,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        
        1000:{
            items:1,
            
            loop:false
        }
    }
})
$(".nav-menu-btn").on("click",()=>{
    $(".header-bottom-content").addClass("opened")
});
$(".menu-close-icon").on("click",()=>{
    $(".header-bottom-content").removeClass("opened");
});
$(".bg-overlay").on("click",()=>{
    $(".header-bottom-content").removeClass("opened");;
});
$(".search-btn").on("click",(e)=>{
    $(".search-btn .fa-solid").toggleClass("fa-magnifying-glass");
    $(".search-btn .fa-solid").toggleClass("fa-times")
$(".search-input").toggleClass("show");
e.preventDefault();
console.log("ewe")
});