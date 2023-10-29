const navEmail = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const mobilMenu = document.querySelector(".mobile-menu");
const btnmenuMovil = document.querySelector(".menu")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail")


navEmail.addEventListener("click", toggleMenuEmail)
btnmenuMovil.addEventListener("click", toggleMenuMobil)
menuCarritoIcon.addEventListener("click", toogleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleMenuEmail(event){

    const isshoppingCartContainer = shoppingCartContainer.classList.contains("inactive");

    //si el mobile menu esta open, hay que cerrarlo
    if (!isshoppingCartContainer) {
        shoppingCartContainer.classList.add("inactive")
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }

    emailMenu.classList.toggle("inactive")
}

function toggleMenuMobil(event) {

    const isshoppingCartContainer = shoppingCartContainer.classList.contains("inactive");

    if (!isshoppingCartContainer) {
        shoppingCartContainer.classList.add("inactive")
    }
    closeProductDetailAside();

    mobilMenu.classList.toggle("inactive")
}

function  toogleCarritoAside(event){
    const isMobilMenuClosed = mobilMenu.classList.contains("inactive");
    const emailMenuClosed = emailMenu.classList.contains("inactive");

    //si el mobile menu esta open, hay que cerrarlo
    if (!isMobilMenuClosed || !emailMenuClosed) {
        mobilMenu.classList.add("inactive")
        emailMenu.classList.add("inactive")
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
    
}

function openProductDetailAside(event) {
    productDetailContainer.classList.remove("inactive")
    shoppingCartContainer.classList.add("inactive")
    mobilMenu.classList.add("inactive")
    emailMenu.classList.add("inactive")
}

function closeProductDetailAside(event){
    productDetailContainer.classList.add("inactive")

}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image);

        switch (arr.indexOf(product)) {
            case 0:
                productImg.addEventListener("click", openProductDetailAside);
                break;
        
            default:
                break;
        }
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement("figure")
        const productImgCard = document.createElement("img")
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)