let isEnglish
let ptContent = {}
let enContent = {}

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

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
})

function handleInputsValidationTranslations() {
    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')

    nameInput.addEventListener('input', () => {
        setValidationMessages(nameInput, emailInput, messageInput)
        nameInput.reportValidity()
    })

    emailInput.addEventListener('input', () => {
        setValidationMessages(nameInput, emailInput, messageInput)
        emailInput.reportValidity()
    })

    messageInput.addEventListener('input', () => {
        setValidationMessages(nameInput, emailInput, messageInput)
        messageInput.reportValidity()
    })

    form.addEventListener('submit', (e) => {
        setValidationMessages(nameInput, emailInput, messageInput)

        if (!form.checkValidity()) {
            e.preventDefault()
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleInputsValidationTranslations()

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

function setValidationMessages(nameInput, emailInput, messageInput) {
    if (isEnglish) {
        nameInput.setCustomValidity(nameInput.validity.valueMissing ? "Please enter your name." : "")
        emailInput.setCustomValidity(emailInput.validity.valueMissing ? "Please enter your email." : emailInput.validity.typeMismatch ? "Please enter a valid email address." : "")
        messageInput.setCustomValidity(messageInput.validity.valueMissing ? "Please enter your message." : "")
    } else {
        nameInput.setCustomValidity(nameInput.validity.valueMissing ? "Por favor, insira seu nome." : "")
        emailInput.setCustomValidity(emailInput.validity.valueMissing ? "Por favor, insira seu email." : emailInput.validity.typeMismatch ? "Por favor, insira um email válido." : "")
        messageInput.setCustomValidity(messageInput.validity.valueMissing ? "Por favor, escreva sua mensagem." : "")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('contact-name')
    const emailInput = document.getElementById('contact-email')
    const messageInput = document.getElementById('contact-message')

    const toggleSlider = document.getElementById('toggle-slider')
    const flipCardInner = document.querySelector('.flip-card-inner')

    isEnglish = false;  

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

    ptContent = { 
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
        "education-text" : "Análise e Desenvolvimento de Sistemas",
        "about-paragraph": "Meu nome é Sabrina Rodrigues, tenho 26 anos e moro no Rio Grande do Sul, Brasil. Após passar quase dois anos nos Estados Unidos, estou de volta ao Brasil e em busca de uma oportunidade de estágio na área de desenvolvimento de software.<br><br> Trabalhei com atendimento ao cliente, onde aprendi muito sobre comunicação, resolução de problemas e trabalho em equipe. Nos últimos dois anos, participei de um programa de intercâmbio cultural que me deu a chance de crescer, me adaptar e ver as coisas de novas perspectivas.<br><br> Durante esse tempo, estudei e melhorei minhas habilidades de programação, descobrindo minha paixão por criar interfaces modernas e eficientes, usando animações CSS para criar uma experiência de usuário mais imersiva e interativa. Embora seja uma programadora iniciante, estou focada em aprender e melhorar minhas habilidades com novas tecnologias. Estou empolgada para crescer como desenvolvedora e contribuir para projetos que inspirem e encantem os usuários.",
        "technologies-heading": "Tecnologias",
        "projects-title": "Projetos Recentes",
        "project-flickshelf-description":"FlickShelf é uma aplicação web que permite criar listas das suas séries assistidas. Com uma interface intuitiva, você pode adicionar, editar e remover títulos, mantendo sua lista sempre atualizada.",
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
        "toast_success": 'Sua mensagem foi enviada!',
        "toast_error": 'Algo deu errado. Tente novamente.',
        "footer-about": "Sobre",
        "footer-technologies": "Tecnologias",
        "footer-projects": "Projetos",
        "footer-contact": "Contato",
    }

    enContent = {
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
        "education-text" : "Software Development",
        "about-paragraph": "My name is Sabrina Rodrigues I'm 26 years old, I'm based in Rio Grande do Sul, Brazil. After almost 2 years living in the US I'm back in Brazil and looking for an internship in software development.<br><br> I used to work in customer service where I learned a lot about communication, problem solving, and working as a team. Over the past two years, I've been on a cultural exchange program that gave me the chance to grow, adapt, and see things from new perspectives.<br><br> During this time, I've been studing and improving my coding skills, and I discovered myself passionate about creating modern, efficient interfaces and I enjoy using CSS animations to create a more immersive and interactive user experience. While I'm a beginner programmer, I'm focused on learning and committed to improving my skills with new technologies. I'm excited to grow as a developer and be able to contribute to projects that inspire and delight users.",
        "technologies-heading": "Technologies",
        "projects-title": "Recent Projects",
        "project-flickshelf-description":"FlickShelf is a web application that allows you create shelves of your watched series. With an intuitive interface, you can add, edit, and remove titles, keeping your list always up to date.",
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
        "toast_success": 'Your message was sent!',
        "toast_error": 'Something went wrong.',
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
        setValidationMessages(nameInput, emailInput, messageInput)
    })
})

const form = document.getElementById("contact-form")
const toast = document.getElementById("toast")

function showToast(type = "success") {
    toast.textContent = isEnglish ? enContent.toast_success : ptContent.toast_success

    if (type === 'error') {
        toast.textContent = isEnglish ? enContent.toast_error : ptContent.toast_error
    }

    toast.className = `toast show ${type}`
    toast.classList.remove("hidden")

    setTimeout(() => {
        toast.classList.remove("show")
        setTimeout(() => toast.classList.add("hidden"), 300)
    }, 5000)
}

form.addEventListener("submit", async function (e) {
    e.preventDefault()

    const formData = new FormData(form)

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        })

        if (response.ok) {
            showToast("success")
            form.reset()
        } else {
            const data = await response.json();
            const errorMessage = data.errors
                ? data.errors.map(err => err.message).join(", ")
                : "Something went wrong."
            showToast("error")
        }
    } catch (error) {
        showToast("error")
    }
})
