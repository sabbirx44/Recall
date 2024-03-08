const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
    const productCart = document.getElementById('product-cart');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productCart.appendChild(li);
};

const getStoredInCart = () => {
    let cart = {};
    const storedInCart = localStorage.getItem('cart');
    if (storedInCart) {
        cart = JSON.parse(storedInCart);
    }
    return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredInCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringify = JSON.stringify(cart);
    console.log(cartStringify);
    localStorage.setItem('cart', cartStringify);
};

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredInCart();
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}
displayProductFromLocalStorage();