// Simpan cart di localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " added to cart!");
}

// Tampilkan cart di cart.html
window.onload = function() {
    const cartItems = document.getElementById('cart-items');
    if(cartItems) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }
};
