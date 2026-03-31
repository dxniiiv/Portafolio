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
        aboutTitle: "Sobre mí",
        aboutText1: "Soy Daniel Vargas, estudiante apasionado por la tecnología..."
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
        aboutText1: "I am Daniel Vargas, a student passionate about technology..."
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