function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const techBoxes = document.querySelectorAll('.tech-box')
    const technologiesSection = document.querySelector('.tech-container')
    let hasAnimated = false;  
    function animateTechBoxes() {
        const sectionPosition = technologiesSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (sectionPosition < windowHeight && !hasAnimated) {
            techBoxes.forEach((box, index) => {
                let delay = 300 * index;  

                if (index === 0) {
                    delay = 400;  
                } else if (index === 1) {
                    delay = 0;  
                } else if (index === 2) {
                    delay = 0;  
                } else if (index === 3) {
                    delay = 400;  
                }

                setTimeout(() => {
                    box.classList.add('animate')
                }, delay)
            })

            hasAnimated = true;  
        }
    }

    window.addEventListener('scroll', animateTechBoxes);

    animateTechBoxes();
});




