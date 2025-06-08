document.addEventListener('DOMContentLoaded', () => {
    // Animacje przy przewijaniu
    const animatedElements = document.querySelectorAll('.animated-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Obsługa zmiany języka
    const translations = {
        pl: {
            download_app: "Sprawdź Prototyp",
            hero_title: "Aplikacja<br>łącząca<br><span style='color: #251F5F;'>potrzebujących</span><br>z pomocą",
            features_title: "Funkcje aplikacji po<span style='color:#7383FF'>moc</span>.tu",
            features_desc: "Kompleksowe narzędzia wspierające osoby w trudnej sytuacji życiowej oraz umożliwiające pomoc innym",
            feature1_title: "Szukam wsparcia",
            feature1_desc: "Znajdź miejsca pomocy, skorzystaj z poradników i otrzymaj wsparcie 24/7",
            feature2_title: "Chcę pomóc innym",
            feature2_desc: "Dodaj miejsca pomocy, wspieraj rzeczowo i buduj społeczność wzajemnej pomocy",
            footer_desc: "Aplikacja mobilna łącząca osoby w trudnej sytuacji życiowej z dostępną pomocą w ich okolicy.",
            contact: "Kontakt",
            about_project: "O projekcie",
            privacy: "Polityka prywatności",
            rules: "Regulamin",
            how_to_help: "Jak pomóc?",
            partners: "Partnerzy",
            country: "Polska",
            advanced1: "<i class='bx bx-map-pin'></i><div><h4>Mapa pomocy</h4><p>Geolokalizacja miejsc wsparcia.</p></div>",
            advanced2: "<i class='bx bx-book-open'></i><div><h4>Poradnik praktyczny</h4><p>Wskazówki jak zadbać o siebie.</p></div>",
            advanced3: "<i class='bx bx-walk'></i><div><h4>Kroki do samodzielności</h4><p>Interaktywny plan działania.</p></div>",
            advanced4: "<i class='bx bx-bot'></i><div><h4>Chatbot 24/7</h4><p>Całodobowe wsparcie i kierowanie.</p></div>",
            advanced5: "<i class='bx bx-chat'></i><div><h4>Czat z konsultantem</h4><p>Rozmowy z ekspertami.</p></div>",
            advanced6: "<i class='bx bxs-quote-left'></i><div><h4>Historie innych</h4><p>Inspirujące artykuły i nagrania.</p></div>",
            advanced7: "<i class='bx bx-question-mark'></i><div><h4>Quiz samooceny</h4><p>Sprawdź, czy jesteś zagrożony.</p></div>",
            advanced8: "<i class='bx bx-box'></i><div><h4>Kącik rzeczy do życia</h4><p>Darmowe przedmioty od innych.</p></div>",
            advanced9: "<i class='bx bx-plus-circle'></i><div><h4>Dodawanie miejsc pomocy</h4><p>Możliwość dodania nowych lokalizacji.</p></div>",
            advanced10: "<i class='bx bxs-package'></i><div><h4>Wsparcie rzeczowe</h4><p>Oferowanie darmowych przedmiotów.</p></div>",
            advanced11: "Buduj społeczność pomocy",
            advanced12: "Twoja pomoc tworzy sieć wsparcia, która może zmienić życie wielu osób. Każdy gest ma znaczenie.",
            advanced13: "Nasza misja i cele",
            advanced14: "pomoc.tu to więcej niż aplikacja - to cyfrowy most łączący osoby w trudnej sytuacji życiowej z konkretną pomocą w ich okolicy.",
            advanced15: "Każdy zasługuje na wsparcie i szansę na lepsze jutro",
            advanced16: "<i class='bx bx-check-circle'></i><h4>Dostępność pomocy</h4><p>Ułatwiamy dostęp poprzez geolokalizację.</p>",
            advanced17: "<i class='bx bx-check-circle'></i><h4 >Wsparcie emocjonalne</h4><p>Oferujemy chatbot i rozmowy z konsultantami.</p>",
            advanced18: "<i class='bx bx-check-circle'></i><h4 >Społeczność wzajemnej pomocy</h4><p>Łączymy osoby potrzebujące z tymi, którzy chcą pomóc.</p>",
            advanced19: "<i class='bx bx-check-circle'></i><h4 >Kompleksowe rozwiązanie</h4><p>Od podstawowych potrzeb po plany powrotu do samodzielności.</p>",
        },
        en: {
            download_app: "Try Prototype",
            hero_title: "An app<br>connecting<br><span style='color: #251F5F;'>those in need</span><br>with help",
            features_title: "Features of the po<span style='color:#7383FF'>moc</span>.tu app",
            features_desc: "Comprehensive tools supporting people in difficult life situations and enabling others to help",
            feature1_title: "I need support",
            feature1_desc: "Find help centers, read guides, and get 24/7 support",
            feature2_title: "I want to help",
            feature2_desc: "Add support places, provide goods, and build a helping community",
            footer_desc: "A mobile app connecting people in difficult life situations with help available nearby.",
            contact: "Contact",
            about_project: "About the project",
            privacy: "Privacy Policy",
            rules: "Terms of Service",
            how_to_help: "How to help?",
            partners: "Partners",
            country: "Poland",
            advanced1: "<i class='bx bx-map-pin'></i><div><h4>Help Map</h4><p>Geolocation of support places.</p></div>",
            advanced2: "<i class='bx bx-book-open'></i><div><h4>Practical Guide</h4><p>Tips on how to take care of yourself.</p></div>",
            advanced3: "<i class='bx bx-walk'></i><div><h4>Steps to Independence</h4><p>Interactive action plan.</p></div>",
            advanced4: "<i class='bx bx-bot'></i><div><h4>24/7 Chatbot</h4><p>Round-the-clock support and guidance.</p></div>",
            advanced5: "<i class='bx bx-chat'></i><div><h4>Chat with a Consultant</h4><p>Talks with experts.</p></div>",
            advanced6: "<i class='bx bxs-quote-left'></i><div><h4>Stories of Others</h4><p>Inspiring articles and recordings.</p></div>",
            advanced7: "<i class='bx bx-question-mark'></i><div><h4>Self-assessment Quiz</h4><p>Check if you're at risk.</p></div>",
            advanced8: "<i class='bx bx-box'></i><div><h4>Life Essentials Corner</h4><p>Free items from others.</p></div>",
            advanced9: "<i class='bx bx-plus-circle'></i><div><h4>Add Support Locations</h4><p>Possibility to add new places.</p></div>",
            advanced10: "<i class='bx bxs-package'></i><div><h4>Material Support</h4><p>Offer free items.</p></div>",
            advanced11: "Build a help community",
            advanced12: "Your support creates a network that can change lives. Every gesture matters.",
            advanced13: "Our mission and goals",
            advanced14: "pomoc.tu is more than an app – it's a digital bridge connecting people in crisis with real help nearby.",
            advanced15: "Everyone deserves support and a chance for a better tomorrow",
            advanced16: "<i class='bx bx-check-circle'></i><h4>Access to Help</h4><p>We simplify access through geolocation.</p>",
            advanced17: "<i class='bx bx-check-circle'></i><h4>Emotional Support</h4><p>We offer a chatbot and consultations with specialists.</p>",
            advanced18: "<i class='bx bx-check-circle'></i><h4>Mutual Aid Community</h4><p>We connect those in need with those willing to help.</p>",
            advanced19: "<i class='bx bx-check-circle'></i><h4>Comprehensive Solution</h4><p>From basic needs to independence recovery plans.</p>",
        }
    };

    const langSelect = document.getElementById('language-select');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = translations[lang][key];
            if (translation) {
                el.innerHTML = translation;
            }
        });
        document.documentElement.lang = lang;
    }

    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        updateLanguage(selectedLang);
        localStorage.setItem('selectedLanguage', selectedLang);
    });

    // Inicjalizacja języka
    const storedLang = localStorage.getItem('selectedLanguage') || 'pl';
    langSelect.value = storedLang;
    updateLanguage(storedLang);
});
