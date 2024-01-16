function scrollToAbout() {
    const aboutSection = document.getElementById('ABOUT');
    const windowHeight = window.innerHeight;
    const sectionHeight = aboutSection.offsetHeight;

  
    const scrollToY = aboutSection.offsetTop - (windowHeight - sectionHeight) / 2;

    
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


const aboutLink = document.querySelector('a[href="#About"]');
aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToAbout();
});

 function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;

    
    const scrollToY = section.offsetTop - (windowHeight - sectionHeight) / 2;

 
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
     
        header.style.top = '0';
    } else {
     
        header.style.top = `-${header.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', function () {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    const aboutLink = document.querySelector('a[href="#About"]');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        scrollToSection('ABOUT');
    });
    
    const productsLink = document.querySelector('a[href="#Products"]');
    productsLink.addEventListener('click', function (event) {
        event.preventDefault(); 
        scrollToSection('Product');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the contact link and the contact section
    const contactLink = document.querySelector('a[href="#Contact"]');
    const contactSection = document.querySelector('#contact');

    // Add a click event listener to the contact link
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
    });
});