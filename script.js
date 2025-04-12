const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}


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

    window.addEventListener('scroll', animateTechBoxes)

    animateTechBoxes()
})

document.addEventListener('DOMContentLoaded', function() {
    const toggleSlider = document.getElementById('toggle-slider')
    const flipCardInner = document.querySelector('.flip-card-inner')

    let isEnglish = false;  

    function applyTranslation(content) {
        for (const key in content) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = content[key]
                } else {
                    element.innerHTML = content[key]
                }
            }
        }
    }

    const ptContent = { 
        "header-about": "Sobre",
        "header-technologies": "Tecnologias",
        "header-projects": "Projetos",
        "header-contact": "Contato",
        "header-visit-github": "Visitar Github",
        "profile-hi": "Olá, eu sou",
        "frontend-dev": "Desenvolvedora Frontend",
        "view-cv": "Visualizar CV",
        "contact-btn": "Contato",
        "about-text": "Saiba mais",
        "about-heading": "Sobre mim",
        "experience-heading": "Experiência",
        "experience-text": "2 anos <br/ >Programa de intercâmbio Cultural",
        "education-heading": "Educação",
        "about-paragraph": "Meu nome é Sabrina Rodrigues, sou do Rio Grande do Sul, Brasil, mas atualmente moro em Maryland, EUA. Trabalhei com atendimento ao cliente, onde aprendi muito sobre comunicação, resolução de problemas e trabalho em equipe. Nos últimos dois anos, participei de um programa de intercâmbio cultural que me deu a chance de crescer, me adaptar e ver as coisas de novas perspectivas. Durante esse tempo, estudei e melhorei minhas habilidades de programação, descobrindo minha paixão por criar interfaces modernas e eficientes, usando animações CSS para criar uma experiência de usuário mais imersiva e interativa. Embora seja uma programadora iniciante, estou focada em aprender e melhorar minhas habilidades com novas tecnologias. Estou empolgada para crescer como desenvolvedora e contribuir para projetos que inspirem e encantem os usuários.",
        "technologies-heading": "Tecnologias",
        "projects-title": "Projetos Recentes",
        "project-flickshelf-description":"FlickShelf é uma aplicação web que permite criar listas das suas séries e filmes assistidos. Com uma interface intuitiva, você pode adicionar, editar e remover títulos, mantendo sua lista sempre atualizada.",
        "project-whooshtimer-description": "WhooshTimer é uma ferramenta baseada na web projetada para ajudar os usuários a rastrear intervalos de tempo com uma interface elegante e intuitiva. Ela permite que os usuários criem, gerenciem e salvem seus cronômetros.",
        "project-xoboard-description": "XoBoard é uma aplicação web que traz o clássico jogo da velha, permitindo que os usuários joguem contra outra pessoa no mesmo dispositivo. A interface simples e interativa oferece uma maneira divertida de passar o tempo.",
        "project-flickshelf":"Demostração",
        "project-whooshtimer": "Demostração",
        "project-xoboard": "Demostração",
        "contact-title": "Meus contatos",
        "find-me": "Me Encontre",
        "contact-name": "Nome",
        "contact-message": "Mensagem",
        "contact-send": 'Enviar <i class="fa-regular fa-paper-plane"></i>',
        "footer-about": "Sobre",
        "footer-technologies": "Tecnologias",
        "footer-projects": "Projetos",
        "footer-contact": "Contato",
    }

    const enContent = {
        "header-about": "About",
        "header-technologies": "Technologies",
        "header-projects": "Projects",
        "header-contact": "Contact",  
        "header-visit-github": "Visit Github",
        "profile-hi": "Hi, I'm",
        "frontend-dev": "Frontend Developer",
        "view-cv": "View CV",
        "contact-btn": "Contact",
        "about-text": "Get To Know More",
        "about-heading": "About Me",
        "experience-heading": "Experience",
        "experience-text": "2 years <br/ >Cultural Exchange Program",
        "education-heading": "Education",
        "about-paragraph": "My name is Sabrina Rodrigues, I'm based in Rio Grande do Sul, Brazil but currently living in Maryland, US. I used to work in customer service, where I learned a lot about communication, problem-solving, and working with people. Over the past two years, I've been on a cultural exchange program that gave me the chance to grow, adapt, and see things from new perspectives. During this time, I've been studying and improving my coding skills, discovering myself passionate about creating modern, efficient interfaces and I enjoy using CSS animations to create a more immersive and interactive user experience. While I'm a beginner programmer, I'm focused on learning and committed to improving my skills with new technologies. I'm excited to grow as a developer and contribute to projects that inspire and delight users.",
        "technologies-heading": "Technologies",
        "projects-title": "Recent Projects",
        "project-flickshelf-description":"FlickShelf is a web application that allows you create shelves of your watched series and movies. With an intuitive interface, you can add, edit, and remove titles, keeping your list always up to date.",
        "project-whooshtimer-description": "WhooshTimer is a web-based tool designed to help users track time intervals with a sleek, intuitive interface. It allows users to create, manage, and save their timers.",
        "project-xoboard-description": "XoBoard is a web application that brings the classic Tic-Tac-Toe game, allowing users to play against another person on the same device. The simple and interactive interface provides a fun way to pass the time.",
        "project-flickshelf":"Live Demo",
        "project-whooshtimer": "Live Demo",
        "project-xoboard": "Live Demo",
        "contact-title": "Contact me",
        "find-me": "Find Me",
        "contact-name": "Name",
        "contact-message": "Message",
        "contact-send": 'Send <i class="fa-regular fa-paper-plane"></i>',
        "footer-about": "About",
        "footer-technologies": "Technologies",
        "footer-projects": "Projects",
        "footer-contact": "Contact" 
    }

    applyTranslation(ptContent)

    toggleSlider.addEventListener('click', () => {
        isEnglish = !isEnglish;
        applyTranslation(isEnglish ? enContent : ptContent)
        flipCardInner.classList.toggle('flipped')
    })
})