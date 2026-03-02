// MENU HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// TRADUCCIÓN
const languageToggle = document.getElementById("languageToggle");
let currentLang = "es";

const translations = {
    es: {
        inicio: "Inicio",
        sobreMi: "Sobre mí",
        habilidades: "Habilidades",
        reconocimientos: "Reconocimientos",
        proyectos: "Proyectos",
        contacto: "Contacto",
        hola: "HOLA, SOY DANIEL VARGAS",
        titulo: "Estudiante de ingeniería en sistemas y redes informáticas",
        contactame: "Contáctame",
        aboutTitle: "Sobre mí",
        aboutSubtitle: "Apasionado por la gestión de productos",
        aboutText1: " Soy Daniel Vargas, estudiante apasionado por la tecnología y el desarrollo de soluciones digitales, con interés en la gestión de productos y metodologías ágiles como Scrum. Tengo experiencia en proyectos académicos de desarrollo web y bases de datos, utilizando herramientas como Azure DevOps para la gestión de tareas. Me destaco por ser responsable, analítico y estar en constante aprendizaje, buscando siempre aportar valor y crecer profesionalmente en el área tecnológica.",
        downloadCV: "Descargar CV"
    },
    en: {
        inicio: "Home",
        sobreMi: "About Me",
        habilidades: "Skills",
        reconocimientos: "Achievements",
        proyectos: "Projects",
        contacto: "Contact",
        hola: "HELLO, I'M DANIEL VARGAS",
        titulo: "Engineering student in systems and computer networks",
        contactame: "Contact Me",
        aboutTitle: "About Me",
        aboutSubtitle: "Passionate about product management",
        aboutText1: "I am Daniel Vargas, a student passionate about technology and the development of digital solutions, with a strong interest in product management and agile methodologies such as Scrum. I have experience in academic projects involving web development and databases, using tools like Azure DevOps for task management. I stand out for being responsible, analytical, and committed to continuous learning, always seeking to add value and grow professionally in the technology field.",
        downloadCV: "Download CV"
    }
};

languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    languageToggle.textContent = currentLang.toUpperCase() + " ▾";

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[currentLang][key];
    });
});

// CAMBIO DE SECCIONES (modo páginas internas)
const menuLinks = document.querySelectorAll(".sidebar a[data-section]");
const sections = document.querySelectorAll(".section");

menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.getAttribute("data-section");

        // Ocultar todas
        sections.forEach(section => {
            section.classList.remove("active");
        });

        // Mostrar la seleccionada
        document.getElementById(target).classList.add("active");

        // Activar link
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// EFECTO TYPEWRITER
const text = {
    es: "HOLA, SOY DANIEL VARGAS",
    en: "HELLO, I'M DANIEL VARGAS"
};

let i = 0;
let isDeleting = false;
let speed = 100;

function typeEffect() {
    const currentText = text[currentLang];
    const element = document.getElementById("typewriter");

    if (!isDeleting) {
        element.textContent = currentText.substring(0, i++);
        if (i > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        element.textContent = currentText.substring(0, i--);
        if (i < 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : speed);
}

typeEffect();