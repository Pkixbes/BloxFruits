
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1431323542892318892/ucAICMTpz9q_LXh3k0RvDbhoirPSmJR2uQHHvxl8UTAJnbRU8VsbxmXr4LyxGOO3GYn4"; // Webhook URL'si
    const DISCORD_INVITE_URL = "https://discord.gg/ZDgZbTDurG"; // Davet linki
    // =======================================================

    // Çeviri Verisi (TR adı KEY olarak kullanılır)
    const translations = {
        tr: {
            'page-title': "Blox Fruits Pazarı | Robux ile Fruit Satın Al",
            'header-main': "Blox Fruits **Pazarı**",
            'header-sub': "En nadir Fruit'leri ve Gamepass'leri en iyi Robux fiyatlarıyla bul!",
            'BuyButton': "Satın Al",
            // Ürün İsimleri
            'Batı Ejderhası': "Batı Ejderhası", 'Ejderha': "Ejderha", 'Kitsune': "Kitsune", 'Yeti': "Yeti", 
            'Fruit Notifier': "Fruit Notifier", 'Mor Şimşek': "Mor Şimşek", '2x Mastery': "2x Mastery",
            '2x Para': "2x Para", '2x Boss Drops': "2x Boss Drops", 'Fruit Depolama': "Fruit Depolama",
            'Darkblade': "Darkblade", 'Göksel Acı': "Göksel Acı", 'Sarı Şimşek': "Sarı Şimşek", 
            'Hüzün Acısı': "Hüzün Acısı", 'Izdırap Acısı': "Izdırap Acısı", 'Kırmızı Şimşek': "Kırmızı Şimşek",
            'Yeşil Şimşek': "Yeşil Şimşek", 'Hüsran Acısı': "Hüsran Acısı", 'Super Ruh Acısı': "Super Ruh Acısı",
            'Hızlı Tekne': "Hızlı Tekne",
            // Modal ve Diğer Metinler
            'modal-title': "Satın Alma İşlemi", 'modal-text-1': "Seçilen Ürün:", 'modal-text-2': "Lütfen iletişime geçmek için Discord/Roblox kullanıcı adınızı girin:",
            'modal-placeholder': "Discord/Roblox Kullanıcı Adınız", 'modal-confirm-button': "Talebi Gönder & Discord'a Git",
            'modal-warning': "Not: Satın alma, Discord üzerinden yöneticilerle iletişim kurularak tamamlanacaktır.",
            'alert-success': "Talebiniz başarıyla alındı! Sizi Discord'a yönlendiriyoruz. Lütfen oradan yöneticilerle iletişime geçin.",
            'alert-fail': "Bir hata oluştu. Lütfen Discord sunucumuza gelerek manuel olarak iletişime geçin.",
            'footer-text': "© 2025 Blox Fruits Pazarı. Tüm Hakları Saklıdır. | Bu site Roblox veya Blox Fruits ile resmi olarak bağlantılı değildir."
        },
        en: {
            'page-title': "Blox Fruits Market | Buy Fruits with Robux",
            'header-main': "Blox Fruits **Market**",
            'header-sub': "Find the rarest Fruits and Gamepasses at the best Robux prices!",
            'BuyButton': "Buy Now",
            // Ürün İsimleri
            'Batı Ejderhası': "West Dragon", 'Ejderha': "Dragon", 'Kitsune': "Kitsune", 'Yeti': "Yeti", 
            'Fruit Notifier': "Fruit Notifier", 'Mor Şimşek': "Purple Lighting", '2x Mastery': "2x Mastery",
            '2x Para': "2x Money", '2x Boss Drops': "2x Boss Drops", 'Fruit Depolama': "Fruit Storage",
            'Darkblade': "Darkblade", 'Göksel Acı': "Celestial Pain", 'Sarı Şimşek': "Yellow Lighting", 
            'Hüzün Acısı': "Sadness Pain", 'Izdırap Acısı': "Torment Pain", 'Kırmızı Şimşek': "Red Lightning",
            'Yeşil Şimşek': "Green Lighting", 'Hüsran Acısı': "Frustration Pain", 'Super Ruh Acısı': "Super Spirit Pain",
            'Hızlı Tekne': "Fast Boats",
            // Modal ve Diğer Metinler
            'modal-title': "Purchase Request", 'modal-text-1': "Selected Item:", 'modal-text-2': "Please enter your Discord/Roblox username for contact:",
            'modal-placeholder': "Discord/Roblox Username", 'modal-confirm-button': "Submit Request & Go to Discord",
            'modal-warning': "Note: Purchase will be completed by contacting administrators via Discord.",
            'alert-success': "Your request has been successfully received! We are redirecting you to Discord. Please contact the admins there.",
            'alert-fail': "An error occurred. Please manually contact us by joining our Discord server.",
            'footer-text': "© 2025 Blox Fruits Market. All Rights Reserved. | This site is not officially affiliated with Roblox or Blox Fruits."
        }
    };
    
    // Ürün verileriniz (TR adı anahtar olarak kullanılır)
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

    // DOM Elementleri
    const listingContainer = document.getElementById('fruits-listing');
    const langButtons = document.querySelectorAll('.lang-button');
    const modal = document.getElementById('purchase-modal');
    const closeModal = document.getElementById('close-modal');
    const confirmButton = document.getElementById('modal-confirm-button');
    const contactInput = document.getElementById('contact-username');
    
    let currentLanguage = 'en'; // Varsayılan dil EN
    let selectedFruit = {};

    // ----------------------------------------------------
    // ÇEVİRİ FONKSİYONU
    // ----------------------------------------------------
    function translateElements(lang) {
        currentLanguage = lang;
        const currentTranslation = translations[lang];

        // Sabit başlıkları çevir
        document.getElementById('page-title').textContent = currentTranslation['page-title'];
        document.getElementById('header-main').innerHTML = currentTranslation['header-main']; 
        document.getElementById('header-sub').textContent = currentTranslation['header-sub'];
        document.getElementById('footer-text').innerHTML = currentTranslation['footer-text'];

        // Modal'ı çevir
        document.getElementById('modal-title').textContent = currentTranslation['modal-title'];
        document.getElementById('modal-text-1').textContent = currentTranslation['modal-text-1'];
        document.getElementById('modal-text-2').textContent = currentTranslation['modal-text-2'];
        contactInput.placeholder = currentTranslation['modal-placeholder'];
        confirmButton.textContent = currentTranslation['modal-confirm-button'];
        document.getElementById('modal-warning').textContent = currentTranslation['modal-warning'];

        // Aktif butonu güncelle
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Ürün kartlarını çevir
        document.querySelectorAll('.product-card').forEach(card => {
            const originalName = card.getAttribute('data-original-name');
            card.querySelector('.product-name').textContent = currentTranslation[originalName] || originalName;
            card.querySelector('.buy-button').textContent = currentTranslation['BuyButton'];
        });

        // Modal açıksa içindeki ürün adını da güncelle
        if (modal.style.display === 'block' && selectedFruit.nameTR) {
             const displayedName = currentTranslation[selectedFruit.nameTR] || selectedFruit.nameTR;
             document.getElementById('modal-fruit-name').textContent = `${displayedName} (${selectedFruit.price} Robux)`;
        }
    }

    // ----------------------------------------------------
    // ÜRÜN OLUŞTURMA FONKSİYONU
    // ----------------------------------------------------
    function createProductCards() {
        listingContainer.innerHTML = ''; 
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-type', product.type);
            card.setAttribute('data-original-name', product.name); 

            card.innerHTML = `
                <div class="product-image-container">
                    <img src="images/${product.image}" alt="${product.name}" class="product-image">
                </div>
                <h2 class="product-name">${product.name}</h2> 
                <div class="price-container">
                    <span class="robux-price">${product.robux.toLocaleString('tr-TR')}</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Robux_icon.svg/100px-Robux_icon.svg.png" alt="Robux" class="robux-icon">
                </div>
                <button class="buy-button" data-fruit-name="${product.name}" data-price="${product.robux}">${translations.en.BuyButton}</button>
            `;
            listingContainer.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // OLAY DİNLEYİCİLERİ
    // ----------------------------------------------------
    
    // Dil Seçimi (Bayrak Butonları)
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            translateElements(lang);
            localStorage.setItem('marketLang', lang); 
        });
    });
    
    // Modal Açma (Delegasyon)
    listingContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-button')) {
            const fruitNameTR = e.target.getAttribute('data-fruit-name');
            const fruitPrice = e.target.getAttribute('data-price');
            
            selectedFruit = { nameTR: fruitNameTR, price: fruitPrice };
            
            const currentTranslation = translations[currentLanguage];
            const displayedName = currentTranslation[fruitNameTR] || fruitNameTR;
            document.getElementById('modal-fruit-name').textContent = `${displayedName} (${fruitPrice} Robux)`;

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
            return alert(currentLanguage === 'tr' ? "Lütfen kullanıcı adınızı girin." : "Please enter your username.");
        }
        
        // Webhook Payload'ı (TR adıyla gönderilir)
        const payload = {
            content: "@here", 
            embeds: [{
                title: translations.tr['modal-title'].toUpperCase(),
                color: 3066993,
                fields: [
                    { name: "Ürün", value: selectedFruit.nameTR, inline: true },
                    { name: "Fiyat", value: `${selectedFruit.price} Robux`, inline: true },
                    { name: "İletişim Adı", value: username, inline: false }
                ],
                footer: { text: "Blox Fruits Pazarı" },
                timestamp: new Date().toISOString()
            }]
        };

        try {
            // Webhook Gönderimi
            await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            // Başarı Bildirimi ve Discord'a Yönlendirme
            alert(translations[currentLanguage]['alert-success']);
            modal.style.display = 'none';
            window.location.href = DISCORD_INVITE_URL;

        } catch (error) {
            console.error('Webhook gönderim hatası:', error);
            alert(translations[currentLanguage]['alert-fail']);
        }
    });

    // ----------------------------------------------------
    // BAŞLANGIÇ AYARLARI
    // ----------------------------------------------------
    
    createProductCards();
    
    // Kaydedilen dil varsa yükle, yoksa EN kullan
    const savedLang = localStorage.getItem('marketLang') || 'en';
    translateElements(savedLang); 
});
