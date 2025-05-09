document.addEventListener('DOMContentLoaded', function () {
    // Get Started button functionality
    const getStartedBtn = document.querySelector('.button2');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function () {
            alert('Thank you for your interest! Our team will contact you soon.');
        });
    }



    // Contact Us buttons functionality (all three sections)
    const contactButtons = document.querySelectorAll('.section2 button');
    contactButtons.forEach(button => {
        button.addEventListener('click', function () {
            const parentSection = this.closest('div[class^="section2-"]');
            let contactMethod = '';

            if (parentSection.classList.contains('section2-1')) {
                contactMethod = 'phone at (555) 123-4567';
            } else if (parentSection.classList.contains('section2-2')) {
                contactMethod = 'email at support@example.com';
            } else if (parentSection.classList.contains('section2-3')) {
                contactMethod = 'social media';
            }
            // this prompt message for all contact us
            alert(`You can contact us via ${contactMethod}. We'll respond as soon as possible!`);
        });
    });

});