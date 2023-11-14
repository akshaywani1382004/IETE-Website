function scrollToWelcome() {
    var welcomeSection = document.getElementById('welcome-section');
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    if (sectionId === 'about-us') {
        sectionId = 'below-image-heading';
    }
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

