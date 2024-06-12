//////////////////////////////////////////////////////// Header start

// Tilføj en event listener til dokumentet, der lytter efter 'DOMContentLoaded' begivenheden
// Dette sikrer, at koden først køres, når hele HTML-dokumentet er indlæst
document.addEventListener("DOMContentLoaded", function() {
    // Vælg dropdown-elementet ved dets ID 'header-dropdown'
    const dropdown = document.getElementById('header-dropdown');
    // Vælg dropdown-indholdet ved dets ID 'header-dropdown-content'
    const dropdownContent = document.getElementById('header-dropdown-content');
    // Vælg dropdown-pilen ved dens klasse 'header-dropdown-arrow'
    const dropdownArrow = dropdown.querySelector('.header-dropdown-arrow');
    // Vælg navigation toggle-knappen ved dens klasse 'nav-toggle'
    const navToggle = document.querySelector('.nav-toggle');
    // Vælg hovednavigationen ved dens klasse 'header-main-nav'
    const mainNav = document.querySelector('.header-main-nav');
    // Vælg header-elementet ved dets klasse 'site-header'
    const header = document.querySelector('.site-header');

    // Gør så dropdownen ikke vises, når siden genindlæses
    dropdownContent.style.display = 'none';

    // Tilføj en event listener til dropdown, der lytter efter 'mouseover' begivenheden
    // Dette viser dropdown-indholdet, når musen holdes over dropdownen
    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    // Tilføj en event listener til dropdown, der lytter efter 'mouseout' begivenheden
    // Dette skjuler dropdown-indholdet, når musen fjernes fra dropdownen
    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    // Tilføj en event listener til dropdown-pilen, der lytter efter 'click' begivenheden
    // Dette toggler synligheden af dropdown-indholdet, når pilen klikkes
    dropdownArrow.addEventListener('click', function(event) {
        // Forhindre klik-begivenheden i at sprede sig til forældrelementerne
        event.stopPropagation();
        // Forhindre standard klik-handlingen
        event.preventDefault();
        // Toggler display-egenskaben for dropdown-indholdet
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Tilføj en event listener til dokumentet, der lytter efter 'click' begivenheden
    // Dette skjuler dropdown-indholdet, når der klikkes uden for dropdownen
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });

    // Tilføj en event listener til navigation toggle-knappen, der lytter efter 'click' begivenheden
    // Dette toggler 'open' klassen på hovednavigationen
    navToggle.addEventListener('click', function () {
        mainNav.classList.toggle('open');
    });

    ///////////// Transperant baggrund på header

    // Tilføj en event listener til vinduet, der lytter efter 'scroll' begivenheden
    window.addEventListener('scroll', function () {
        // Tjek om den vertikale scroll-position er større end 50 pixels
        if (window.scrollY > 50) {
            // Hvis ja, tilføj 'scrolled' klassen til header-elementet
            header.classList.add('scrolled');
        } else {
            // Ellers fjern 'scrolled' klassen fra header-elementet
            header.classList.remove('scrolled');
        }
    });
});

//////////////////////////////////////////////////////// Header slut





//////////////////////////////////////////////////////// Holdoversigt Side start

// Når hele dokumentet er indlæst, kør denne funktion
document.addEventListener("DOMContentLoaded", function() {
    // Find elementet med klasserne "Hold-afsnit" og "pile venstre" og tilføj en click-event listener
    document.querySelector(".Hold-afsnit .pile.venstre").addEventListener("click", function() {
        // Vis en besked, når elementet bliver klikket på
        alert("Vi kunne ikke få en rigtig kalender til at virke. Du kigger på et billede.");
    });

    // Find elementet med klasserne "Hold-afsnit" og "pile højre" og tilføj en click-event listener
    document.querySelector(".Hold-afsnit .pile.højre").addEventListener("click", function() {
        // Vis en besked, når elementet bliver klikket på
        alert("Vi kunne ikke få en rigtig kalender til at virke. Du kigger på et billede.");
    });
});

//////////////////////////////////////////////////////// Holdoversigt Side slut


//////////////////////////////////////////////////////// Kontakt Side start

// Tilføj en event listener til formularen, der lytter efter "submit"-begivenheden
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Forhindre formularen i at blive indsendt på den normale måde (som ville genindlæse siden)
    event.preventDefault();

    // Hent værdierne, som brugeren har indtastet i felterne for e-mail, emne og besked
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Hent elementerne, der viser beskeder om at udfylde felter og bekræftelse
    const fillFieldsText = document.querySelector('.fill-fields-text');
    const confirmationText = document.querySelector('.confirmation-text');

    // Tjek om alle felter (e-mail, emne og besked) er udfyldt
    if (email && subject && message) {
        // Hvis alle felter er udfyldt, skjul beskeden om at udfylde felter og vis bekræftelsesbeskeden
        fillFieldsText.style.display = 'none';
        confirmationText.style.display = 'block';
    } else {
        // Hvis nogle felter mangler, vis beskeden om at udfylde felter og skjul bekræftelsesbeskeden
        fillFieldsText.style.display = 'block';
        confirmationText.style.display = 'none';
    }
});


//////////////////////////////////////////////////////// Kontakt Side slut


//////////////////////////////////////////////////////// Error Side start

// Error siden, når man trykker på "Gå tilbage", så kommer man tilbage til siden, man kom fra
function goBack() {
    window.history.back(); // Navigerer tilbage til den forrige side i browserens historik
}

//////////////////////////////////////////////////////// Error Side slut


