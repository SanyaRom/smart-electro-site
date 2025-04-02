// Список для кошика
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.previousElementSibling.innerText;
        cart.push(productName);
        alert(`${productName} додано до кошика`);
    });
});
