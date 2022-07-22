const items = document.querySelector(".items");
const product_item = document.querySelectorAll(".product-item");
items.onclick = (selectedItem) => {

    if (selectedItem.target.classList.contains("item")) {
        items.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
     
       
        let filterItems = selectedItem.target.getAttribute("data-name");
        product_item.forEach(item => {
            let filterProducts = item.getAttribute("data-name");
            if (filterItems == filterProducts) {
                item.classList.add("show");
                console.log("err")
                item.classList.remove("hide");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
}