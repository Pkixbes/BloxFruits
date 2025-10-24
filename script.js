document.addEventListener('DOMContentLoaded', () => {
    // Ürün verileriniz
    const products = [
        { name: "Batı Ejderhası", robux: 2632, image: "westdragon.png", type: "fruit" },
        { name: "Ejderha", robux: 2388, image: "dragon.png", type: "fruit" },
        { name: "Kitsune", robux: 850, image: "kitsune.png", type: "fruit" },
        { name: "Yeti", robux: 422, image: "yeti.png", type: "fruit" },
        { name: "Fruit Notifier", robux: 2500, image: "fruit_notifier.png", type: "gamepass" },
        { name: "Mor Şimşek", robux: 1471, image: "purplelighting.png", type: "fruit" },
        { name: "2x Mastery", robux: 400, image: "2xmastery.png", type: "gamepass" },
        { name: "2x Para", robux: 400, image: "2xmoney.png", type: "gamepass" },
        { name: "2x Boss Drops", robux: 311, image: "2xbossdrops.png", type: "gamepass" },
        { name: "Fruit Depolama", robux: 369, image: "fruitstorage.png", type: "gamepass" },
        { name: "Darkblade", robux: 1107, image: "darkblade.png", type: "gamepass" },
        { name: "Göksel Acı", robux: 484, image: "celestialpain.png", type: "fruit" },
        { name: "Sarı Şimşek", robux: 432, image: "yellowlighting.png", type: "fruit" },
        { name: "Hüzün Acısı", robux: 363, image: "sadnesspain.png", type: "fruit" },
        { name: "Izdırap Acısı", robux: 363, image: "tormentpain.png", type: "fruit" },
        { name: "Kırmızı Şimşek", robux: 346, image: "redlighting.png", type: "fruit" },
        { name: "Yeşil Şimşek", robux: 294, image: "greenlighting.png", type: "fruit" },
        { name: "Hüsran Acısı", robux: 294, image: "frustrationpain.png", type: "fruit" },
        { name: "Super Ruh Acısı", robux: 294, image: "superspiritpain.png", type: "fruit" },
        { name: "Hızlı Tekne", robux: 311, image: "fastboats.png", type: "gamepass" }
    ];

    const listingContainer = document.getElementById('fruits-listing');

    // Her ürünü oluştur ve DOM'a ekle
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-type', product.type); // Gamepass veya Fruit ayrımı için

        // Kartın içeriği
        card.innerHTML = `
            <div class="product-image-container">
                <img src="images/${product.image}" alt="${product.name}" class="product-image">
            </div>
            <h2 class="product-name">${product.name}</h2>
            <div class="price-container">
                <span class="robux-price">${product.robux.toLocaleString('tr-TR')}</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Robux_icon.svg/100px-Robux_icon.svg.png" alt="Robux" class="robux-icon">
            </div>
            <button class="buy-button" data-fruit="${product.name}" data-price="${product.robux}">Satın Al</button>
        `;

        listingContainer.appendChild(card);
    });

    // Satın Al butonlarına tıklama olayı ekleme
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const fruitName = e.target.getAttribute('data-fruit');
            const fruitPrice = e.target.getAttribute('data-price');
            
            // Satın alma mantığı buraya eklenecek.
            // Örnek: Kullanıcıyı Discord/Telegram'a yönlendirme veya bir form açma.
            
            alert(`${fruitName} (${fruitPrice} Robux) satın alma süreci başlatılıyor. İletişim detayları için lütfen yöneticilere ulaşın.`);
            
            // Gerçek bir senaryoda, bu butona tıklayınca bir iletişim formu açılabilir
            // veya Discord sunucunuzun davet bağlantısına yönlendirme yapılabilir.
            
            // Örn: window.location.href = "https://discord.gg/seninsunucun";
        });
    });
});
