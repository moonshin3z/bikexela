// Variables para almacenar los productos del carrito y favoritos
let cart = [];
let favorites = [];

// Añadir al carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const productElement = e.target.parentElement;
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = productElement.querySelector('p').innerText;

        // Añadir el producto al array del carrito
        cart.push({ id: productId, name: productName, price: productPrice });
        displayCartItems();
    });
});

// Añadir a favoritos
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
addToFavoritesButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const productElement = e.target.parentElement;
        const productName = productElement.querySelector('h3').innerText;

        // Añadir el producto al array de favoritos
        favorites.push({ id: productId, name: productName });
        displayFavoriteItems();
    });
});

// Mostrar los productos en el carrito
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpiar el listado anterior
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price}`;
        cartItemsList.appendChild(li);
    });
}

// Mostrar los productos favoritos
function displayFavoriteItems() {
    const favoriteItemsList = document.getElementById('favorite-items');
    favoriteItemsList.innerHTML = ''; // Limpiar el listado anterior
    favorites.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        favoriteItemsList.appendChild(li);
    });
}