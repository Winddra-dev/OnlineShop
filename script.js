document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactButton").addEventListener("click", function () {
        let phoneNumber = "6285777760460";
        let message = encodeURIComponent("Halo, saya tertarik dengan produk diecast Anda!");
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButton = document.getElementById("addToCart");
    const buyNowButton = document.getElementById("buyNow");
    const cartCounter = document.getElementById("cartCounter");

    function updateCartCounter() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCounter) {
            cartCounter.textContent = totalItems;
        }
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProduct = cart.find(item => item.name === product.name);
        
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        alert("Product added to cart!");
    }

    if (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            let product = {
                name: "Yoyo Kayu Tradisional",
                price: Rp8000,
                image: "Asset/Logo Tralo (3).png"
            };
            addToCart(product);
        });
    }

    if (buyNowButton) {
        buyNowButton.addEventListener("click", function () {
            let product = {
                name: "Yoyo Kayu Tradisional",
                price: Rp8000,
                image: "Asset/Logo Tralo (3).png",
                quantity: 1
            };
            localStorage.setItem("cart", JSON.stringify([product]));
            window.location.href = "checkout.html";
        });
    }

    updateCartCounter();
});