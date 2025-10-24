document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // ** DİKKAT: GÜNCEL WEBHOOK VE DAVET LİNKLERİNİZ **
    // =======================================================
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1431323542892318892/ucAICMTpz9q_LXh3k0RvDbhoirPSmJR2uQHHvxl8UTAJnbRU8VsbxmXr4LyxGOO3GYn4"; 
    const DISCORD_INVITE_URL = "https://discord.gg/ZDgZbTDurG"; 
    // =======================================================

    // Ürün verileriniz (İngilizce isimler ve WebP uzantısı kullanıldı)
    const products = [
        // NOT: Resim yolları küçük harf ve boşluksuz hale getirildi (.webp uzantısı ile)
        { name: "West Dragon", robux: 2632, image: "westdragon.webp", type: "fruit" },
        { name: "Dragon", robux: 2388, image: "dragon.webp", type: "fruit" },
        { name: "Kitsune", robux: 850, image: "kitsune.webp", type: "fruit" },
        { name: "Yeti", robux: 422, image: "yeti.webp", type: "fruit" },
        { name: "Fruit Notifier", robux: 2500, image: "fruitnotifier.webp", type: "gamepass" },
        { name: "Purple Lighting", robux: 1471, image: "purplelightning.webp", type: "fruit" },
        { name: "2x Mastery", robux: 400, image: "2xmastery.webp", type: "gamepass" },
        { name: "2x Money", robux: 400, image: "2xmoney.webp", type: "gamepass" },
        { name: "2x Boss Drops", robux: 311, image: "2xbossdrops.webp", type: "gamepass" },
        { name: "Fruit Storage", robux: 369, image: "fruitstorage.webp", type: "gamepass" },
        { name: "Darkblade", robux: 1107, image: "darkblade.webp", type: "gamepass" },
        { name: "Celestial Pain", robux: 484, image: "celestialpain.webp", type: "fruit" },
        { name: "Yellow Lighting", robux: 432, image: "yellowlightning.webp", type: "fruit" },
        { name: "Sadness Pain", robux: 363, image: "sadnesspain.webp", type: "fruit" },
        { name: "Torment Pain", robux: 363, image: "tormentpain.webp", type: "fruit" },
        { name: "Red Lightning", robux: 346, image: "redlightning.webp", type: "fruit" },
        { name: "Green Lighting", robux: 294, image: "greenlightning.webp", type: "fruit" },
        { name: "Frustration Pain", robux: 294, image: "frustrationpain.webp", type: "fruit" },
        { name: "Super Spirit Pain", robux: 294, image: "superspiritpain.webp", type: "fruit" },
        { name: "Fast Boats", robux: 311, image: "fastboats.webp", type: "gamepass" }
    ];

    // DOM Elementleri
    const listingContainer = document.getElementById('fruits-listing');
    const modal = document.getElementById('purchase-modal');
    const closeModal = document.getElementById('close-modal');
    const confirmButton = document.getElementById('modal-confirm-button');
    const contactInput = document.getElementById('contact-username');
    
    let selectedFruit = {};

    // ----------------------------------------------------
    // ÜRÜN KARTLARINI OLUŞTURMA
    // ----------------------------------------------------
    function createProductCards() {
        listingContainer.innerHTML = ''; 
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-type', product.type);

            card.innerHTML = `
                <div class="product-image-container">
                    <img src="images/${product.image}" alt="${product.name}" class="product-image">
                </div>
                <h2 class="product-name">${product.name}</h2> 
                <div class="price-container">
                    <span class="robux-price">${product.robux.toLocaleString('en-US')}</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Robux_icon.svg/100px-Robux_icon.svg.png" alt="Robux" class="robux-icon">
                </div>
                <button class="buy-button" data-fruit-name="${product.name}" data-price="${product.robux}">Buy Now</button>
            `;
            listingContainer.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // OLAY DİNLEYİCİLERİ
    // ----------------------------------------------------
    
    // Modal Açma (Delegasyon)
    listingContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-button')) {
            const fruitName = e.target.getAttribute('data-fruit-name');
            const fruitPrice = e.target.getAttribute('data-price');
            
            selectedFruit = { name: fruitName, price: fruitPrice };
            
            document.getElementById('modal-fruit-name').textContent = `${fruitName} (${fruitPrice} Robux)`;

            modal.style.display = 'block';
        }
    });

    // Modal Kapatma
    closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (e) => {
        if (e.target === modal) { modal.style.display = 'none'; }
    });
    
    // Satın Alma Onayı ve Webhook Gönderimi
    confirmButton.addEventListener('click', async () => {
        const username = contactInput.value.trim();

        if (!username) {
            return alert("Please enter your Discord or Roblox username.");
        }
        
        // Webhook Payload'ı
        const payload = {
            content: "@here",
            embeds: [{
                title: "🚨 NEW PURCHASE REQUEST 🚨",
                color: 3066993,
                fields: [
                    { name: "Item", value: selectedFruit.name, inline: true },
                    { name: "Price", value: `${selectedFruit.price} Robux`, inline: true },
                    { name: "Contact Name", value: username, inline: false }
                ],
                footer: { text: "Blox Fruits Market" },
                timestamp: new Date().toISOString()
            }]
        };

        try {
            // Webhook Gönderimi
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                // Başarı Bildirimi ve Discord'a Yönlendirme
                alert(`Request received! We are redirecting you to Discord. Please contact the admins there using username: ${username}.`);
                modal.style.display = 'none';
                window.location.href = DISCORD_INVITE_URL;
            } else {
                 // Discord API'dan hata gelirse
                 console.error('Discord Webhook Failed:', response.status, response.statusText);
                 alert("An error occurred while sending the request (Error " + response.status + "). Please join our Discord server manually to contact us.");
            }

        } catch (error) {
            // Ağ veya başka bir hata oluşursa
            console.error('Network Error:', error);
            alert("A network error occurred. Please manually join our Discord server to contact us.");
        }
    });

    // ----------------------------------------------------
    // BAŞLANGIÇ AYARLARI
    // ----------------------------------------------------
    
    createProductCards();
});
