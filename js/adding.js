let cart = [];
let totalPrice = 0;
let discountedPrice = 0;

let discount = 0;
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total-price');
    const discountedElement = document.getElementById('discounted-price');
    const discountElement = document.getElementById("discount");
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
    const promoCode = promoCodeInput.value;
    if (promoCode === "SELL200") {
        discountedPrice = totalPrice * 0.8;
        discount = totalPrice * 0.2;
        calculateDiscountedPrice();


    }
}
function calculateDiscountedPrice() {
    const discountedElement = document.getElementById('discounted-price');
    const discountElement =document.getElementById('discount');
    if (totalPrice >= 200) {
        discountedElement.textContent = discountedPrice.toFixed(2);
        discountElement.textContent = discount.toFixed(2)
    }
    else {
        discountedElement.textContent = totalPrice.toFixed(2);
        discountElement.textContent = totalPrice.toFixed(2)
    }
}

const promoInput =document. getElementById('promo-code');
const applyBtn= document . getElementById('mybtn');
const promoCode = 'SELL200';

promoInput.addEventListener('input',function(){
    const enteredCode  = promoInput.value.trim();
    if(enteredCode ===promoCode){
        applyBtn.disabled = false;
    }else{
        applyBtn.disabled = true;
    }
});








