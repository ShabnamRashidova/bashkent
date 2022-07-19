$('.banner-carousel').owlCarousel({
    loop: false,
    responsiveClass: true,
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
$(".search-btn").on("click", (e) => {
    $(".search-btn .fa-solid").toggleClass("fa-magnifying-glass");
    $(".search-btn .fa-solid").toggleClass("fa-times")
    $(".search-input").toggleClass("show");
    e.preventDefault();
    console.log("ewe")
});
// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});
const items = document.querySelector(".items");
const product_item = document.querySelectorAll(".product-item");
items.onclick = (selectedItem) => {

    if (selectedItem.target.classList.contains("item")) {
     
        selectedItem.target.classList.add("active");
        items.querySelector(".active").classList.remove("active"); 
        let filterItems = selectedItem.target.getAttribute("data-name");
        product_item.forEach(item => {
            let filterProducts = item.getAttribute("data-name");
            if (filterItems == filterProducts) {
                item.classList.add("show");
                item.classList.remove("hide");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
}
