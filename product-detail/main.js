const currency = "$";

const productPrice = document.getElementById("price");
const monthlyPrice = document.getElementById("monthly-price");

const heartIcon = document.getElementById("wishlist")

const mainImg = document.getElementById("main-img");
const childImg1 = document.getElementById("child-1");
const childImg2 = document.getElementById("child-2");
const childImg3 = document.getElementById("child-3");
const childImg4 = document.getElementById("child-4");

const price = 1741;
productPrice.innerHTML = price + " " + currency;

function calculate() {
    const x = document.getElementById("form-select");
    const i = x.selectedIndex;
    var finalPrice = price * 0.3 + price

    if (i == 0) {
        percent = 0 + " " + currency
        finalPrice = price
    }
    else if (i == 1) {
        percent = (finalPrice / 6).toFixed(2) + " " + currency
    }
    else if (i == 2) {
        percent = (finalPrice / 9).toFixed(2) + " " + currency
    }
    else if (i == 3) {
        percent = (finalPrice / 12).toFixed(2) + " " + currency
    }
    else if (i == 4) {
        percent = (finalPrice / 18).toFixed(2) + " " + currency
    }

    productPrice.innerHTML = finalPrice + " " + currency;
    monthlyPrice.innerHTML = percent;
}

function AddWishlist() {
    heartIcon.style.color = "#EA2027"
}

function AddWishlistDb() {
    heartIcon.style.color = "#333333"
}

function ChangeColorGray() {
    mainImg.src = "./image/gray1.png"
    childImg1.src = "./image/gray1.png"
    childImg2.src = "./image/gray2.PNG"
    childImg3.src = "./image/gray3.PNG"
    childImg4.src = "./image/gray4.PNG"
}

function ChangeColorBlue() {
    mainImg.src = "./image/blue1.jpg"
    childImg1.src = "./image/blue1.jpg"
    childImg2.src = "./image/blue2.jpg"
    childImg3.src = "./image/blue3.jpg"
    childImg4.src = "./image/blue4.jpg"
}

function ChangeColorGold() {
    mainImg.src = "./image/gold1.jpg"
    childImg1.src = "./image/gold1.jpg"
    childImg2.src = "./image/gold2.jpg"
    childImg3.src = "./image/gold3.jpg"
    childImg4.src = "./image/gold4.jpg"
}