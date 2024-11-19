// script.js

// Store products in memory (for demonstration purposes)
let products = [];

// Handle login
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    alert(`Logged in as ${role}`);
});

// Handle product posting by farmers
document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productDescription = document.getElementById("productDescription").value;

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
    };

    products.push(product);
    displayProducts();

    // Clear form
    document.getElementById("productForm").reset();
    alert("Product posted successfully!");
});

// Display products for customers
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p
