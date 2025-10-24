document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // ** BU BÖLÜMLER GÜNCELLENDİ **
    // =======================================================
    // 1. DİKKAT: Bu URL Discord Webhook URL'niz olmalıdır.
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1431323542892318892/ucAICMTpz9q_LXh3k0RvDbhoirPSmJR2uQHHvxl8UTAJnbRU8VsbxmXr4LyxGOO3GYn4"; 
    // 2. DİKKAT: Bu URL Discord sunucunuzun davet linki olmalıdır.
    const DISCORD_INVITE_URL = "https://discord.gg/ZDgZbTDurG"; 
    // =======================================================

    // Ürün verileriniz (İngilizce isimler kullanıldı)
    const products = [
        { name: "West Dragon", robux: 2632, image: "westdragon.png", type: "fruit" },
        { name: "Dragon", robux: 2388, image: "dragon.png", type: "fruit" },
        { name: "Kitsune", robux: 850, image: "kitsune.png", type: "fruit" },
        { name: "Yeti", robux: 422, image: "yeti.png", type: "fruit" },
        { name: "Fruit Notifier", robux: 2500, image: "fruit_notifier.png", type: "gamepass" },
        { name: "Purple Lighting", robux: 1471, image: "purplelighting.png", type: "fruit" },
        { name: "2x Mastery", robux: 400, image: "2xmastery.png", type: "gamepass" },
        { name: "2x Money", robux: 400, image: "2xmoney.png", type: "gamepass" },
        { name: "2x Boss Drops", robux: 311, image: "2xbossdrops.png", type: "gamepass" },
        { name: "Fruit Storage", robux: 369, image: "fruitstorage.png", type: "gamepass" },
        { name: "Darkblade", robux: 1107, image: "darkblade.png", type: "gamepass" },
        { name: "Celestial Pain", robux: 484, image: "celestialpain.png", type: "fruit" },
        { name: "Yellow Lighting", robux: 432, image: "yellowlighting.png", type: "fruit" },
        { name: "Sadness Pain", robux: 363, image: "sadnesspain.png", type: "fruit" },
        { name: "Torment Pain", robux: 363, image: "tormentpain.png", type: "fruit" },
        { name: "Red Lightning", robux: 346, image: "redlighting.png", type: "fruit" },
        { name: "Green Lighting", robux: 294, image: "greenlighting.png", type: "fruit" },
        { name: "Frustration Pain", robux: 294, image: "frustrationpain.png", type: "fruit" },
        { name: "Super Spirit Pain", robux: 294, image: "superspiritpain.png", type: "fruit" },
        { name: "Fast Boats", robux: 311, image: "fastboats.png", type: "gamepass" }
    ];

    // ... (Geri kalan tüm JavaScript kodu aynı kalmalıdır) ...
    // Modalların açılıp kapanması ve webhook gönderme mantığı buraya gelir.
    
    // (*** Geri kalan JavaScript kodunu buraya ekleyin ***)
    
// (Önceki cevabımdaki tüm kodu alıp bu dosyaya yapıştırdığınızdan emin olun.)
// ... (Tüm fonksiyonlar ve olay dinleyicileri) ...

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
