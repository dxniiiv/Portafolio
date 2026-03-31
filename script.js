const languageToggle = document.getElementById("languageToggle");
let currentLang = "es";

const translations = {
    es: {
        inicio: "Inicio",
        sobreMi: "Sobre mí",
        habilidades: "Habilidades",
        proyectos: "Proyectos",
        contacto: "Contacto",
        hola: "Hola, soy Daniel.",
        titulo: "Apasionado por la gestión de proyectos informáticos.",
        descripcion: "Enfocado en maximizar el valor del producto mediante decisiones estratégicas, priorización efectiva y una clara visión centrada en el usuario.",
        contactame: "Contáctame",

        aboutTitle: "Acerca de mí",
        aboutText1: "Soy Daniel Vargas, estudiante apasionado por la tecnología y el desarrollo de soluciones digitales, con interés en la gestión de productos y metodologías ágiles como Scrum. Tengo experiencia en proyectos académicos de desarrollo web y bases de datos, utilizando herramientas como Azure DevOps para la gestión de tareas. Me destaco por ser responsable, analítico y estar en constante aprendizaje, buscando siempre aportar valor y crecer profesionalmente en el área tecnológica.",

        educacion: "Educación",
        carrera: "Ingeniería en Sistemas y Redes Informáticas",
        universidad: "Universidad Gerardo Barrios",

        intereses: "Intereses"
    },

    en: {
        inicio: "Home",
        sobreMi: "About Me",
        habilidades: "Skills",
        proyectos: "Projects",
        contacto: "Contact",
        hola: "Hi, I'm Daniel.",
        titulo: "Passionate about IT project management.",
        descripcion: "Focused on maximizing product value through strategic decisions, effective prioritization and a strong user-centered vision.",
        contactame: "Contact Me",

        aboutTitle: "About Me",
        aboutText1: "I am Daniel Vargas, a student passionate about technology and digital solution development, with a strong interest in product management and agile methodologies such as Scrum. I have experience in academic projects involving web development and databases, using tools like Azure DevOps for task management. I stand out for being responsible, analytical, and constantly learning, always seeking to add value and grow professionally in the technology field.",

        educacion: "Education",
        carrera: "Systems and Network Engineering",
        universidad: "Gerardo Barrios University",

        intereses: "Interests"
    }
};

languageToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    languageToggle.textContent = currentLang.toUpperCase() + " ▾";

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});
// ===== NAVBAR ACTIVO SEGÚN SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});