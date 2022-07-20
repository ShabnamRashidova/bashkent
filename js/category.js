const items = document.querySelector(".items");
const product_item = document.querySelectorAll(".product-item");
items.onclick = (selectedItem) => {
console.log("err")
    if (selectedItem.target.classList.contains("item")) {

        selectedItem.target.classList.add("active");
        items.querySelector(".active").classList.remove("active");
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