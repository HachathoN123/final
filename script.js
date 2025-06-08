document.getElementById("download").addEventListener("click", function() {
    alert("Pobranie aplikacji nie działa w tej wersji strony.");
});

document.getElementById("lang-toggle").addEventListener("click", function() {
    let currentLang = document.documentElement.lang;
    if (currentLang === "pl") {
        document.documentElement.lang = "en";
        document.getElementById("help-text").textContent = "Looking for support";
        document.getElementById("help-description").textContent = "Find places of help, use guides, and receive support 24/7";
        document.getElementById("offer-text").textContent = "I want to help others";
        document.getElementById("offer-description").textContent = "Add places of help, support materially, and build a mutual help community";
    } else {
        document.documentElement.lang = "pl";
        document.getElementById("help-text").textContent = "Szukam wsparcia";
        document.getElementById("help-description").textContent = "Znajdź miejsca pomocy, skorzystaj z poradników i otrzymaj wsparcie 24/7";
        document.getElementById("offer-text").textContent = "Chcę pomóc innym";
        document.getElementById("offer-description").textContent = "Dodaj miejsca pomocy, wspieraj rzeczowo i buduj społeczność wzajemnej pomocy";
    }
});