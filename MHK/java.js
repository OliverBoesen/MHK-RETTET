document.addEventListener("DOMContentLoaded", function() {
    // Vælg dropdown-elementet ved dets ID 'nyttig-dropdown'
    const nyttigDropdown = document.getElementById('nyttig-dropdown');
    // Vælg dropdown-indholdet ved dets ID 'nyttig-dropdown-content'
    const nyttigDropdownContent = document.getElementById('nyttig-dropdown-content');
    // Vælg dropdown-pilen ved dens klasse 'nyttig-dropdown-arrow'
    const nyttigDropdownArrow = nyttigDropdown.querySelector('.nyttig-dropdown-arrow');
    // Vælg navigation toggle-knappen ved dens klasse 'nyttig-nav-toggle'
    const nyttigNavToggle = document.querySelector('.nyttig-nav-toggle');
    // Vælg hovednavigationen ved dens klasse 'nyttig-header-main-nav'
    const nyttigMainNav = document.querySelector('.nyttig-header-main-nav');
    // Vælg header-elementet ved dets klasse 'nyttig-site-header'
    const nyttigHeader = document.querySelector('.nyttig-site-header');

    // Gør så dropdownen ikke vises, når siden genindlæses
    nyttigDropdownContent.style.display = 'none';

    // Tilføj en event listener til dropdown, der lytter efter 'mouseover' begivenheden
    // Dette viser dropdown-indholdet, når musen holdes over dropdownen
    nyttigDropdown.addEventListener('mouseover', function() {
        nyttigDropdownContent.style.display = 'block';
    });

    // Tilføj en event listener til dropdown, der lytter efter 'mouseout' begivenheden
    // Dette skjuler dropdown-indholdet, når musen fjernes fra dropdownen
    nyttigDropdown.addEventListener('mouseout', function() {
        nyttigDropdownContent.style.display = 'none';
    });

    // Tilføj en event listener til dropdown-pilen, der lytter efter 'click' begivenheden
    // Dette toggler synligheden af dropdown-indholdet, når pilen klikkes
    nyttigDropdownArrow.addEventListener('click', function(event) {
        // Forhindre klik-begivenheden i at sprede sig til forældrelementerne
        event.stopPropagation();
        // Forhindre standard klik-handlingen
        event.preventDefault();
        // Toggler display-egenskaben for dropdown-indholdet
        if (nyttigDropdownContent.style.display === 'block') {
            nyttigDropdownContent.style.display = 'none';
        } else {
            nyttigDropdownContent.style.display = 'block';
        }
    });

    // Tilføj en event listener til dokumentet, der lytter efter 'click' begivenheden
    // Dette skjuler dropdown-indholdet, når der klikkes uden for dropdownen
    document.addEventListener('click', function() {
        nyttigDropdownContent.style.display = 'none';
    });

    // Tilføj en event listener til navigation toggle-knappen, der lytter efter 'click' begivenheden
    // Dette toggler 'open' klassen på hovednavigationen
    nyttigNavToggle.addEventListener('click', function () {
        nyttigMainNav.classList.toggle('open');
    });

    ///////////// Transparent baggrund på header

    // Tilføj en event listener til vinduet, der lytter efter 'scroll' begivenheden
    window.addEventListener('scroll', function () {
        // Tjek om den vertikale scroll-position er større end 50 pixels
        if (window.scrollY > 50) {
            // Hvis ja, tilføj 'scrolled' klassen til header-elementet
            nyttigHeader.classList.add('scrolled');
        } else {
            // Ellers fjern 'scrolled' klassen fra header-elementet
            nyttigHeader.classList.remove('scrolled');
        }
    });
});
