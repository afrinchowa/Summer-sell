let cart = [];
let totalPrice = 0;
let discountedPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total-price');
    const discountedElement = document.getElementById('discounted-price');

    cartList.innerHTML = "";
    for (const item of cart) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price}tk`;
        cartList.appendChild(listItem);
    }
    totalElement.textContent = totalPrice.toFixed(2);
    calculateDiscountedPrice();
}
function applyPromoCode() {
    const promoCodeInput = document.getElementById('promo-code');
    const promoCode = promoCodeInput.innerText;

    if (promoCode === "SELLL200") {
        discountedPrice = totalPrice * 0.8;
        calculateDiscountedPrice();
    }
}


function calculateDiscountedPrice() {
    const discountedElement = document.getElementById('discounted-Price');
    if (totalPrice >= 200) {
        discountedElement.textContent = discountedPrice.toFixed(2);
    }
    else {
        discountedElement.textContent = totalPrice.toFixed(2);
    }
}


