const languageToggle = document.getElementById("languageToggle");
const dropdown = document.querySelector(".lang-dropdown");
const options = document.querySelectorAll("[data-lang-option]");

let currentLang = "es";

const translations = {
    es: {
        navFrase: "Estrategia, tecnología y valor en cada decisión.",
        inicio: "Inicio",
        sobreMi: "Sobre mí",
        habilidades: "Habilidades",
        proyectos: "Proyectos",
        contacto: "Contacto",
        hola: "Hola, soy Daniel.",
        titulo: "Apasionado por la gestión de proyectos informáticos.",
        descripcion: "Enfocado en maximizar el valor del producto mediante decisiones estratégicas, priorización efectiva y una clara visión centrada en el usuario.",
        contactame: "Contáctame",
        descargarCV: "Descargar CV", 

        aboutTitle: "Acerca de mí",
        aboutText1: "Soy Daniel Vargas, estudiante apasionado por la tecnología y el desarrollo de soluciones digitales, con interés en la gestión de productos y metodologías ágiles como Scrum. Tengo experiencia en proyectos académicos de desarrollo web y bases de datos, utilizando herramientas como Azure DevOps para la gestión de tareas. Me destaco por ser responsable, analítico y estar en constante aprendizaje, buscando siempre aportar valor y crecer profesionalmente en el área tecnológica.",

        educacion: "Educación",
        carrera: "Ingeniería en Sistemas y Redes Informáticas",
        universidad: "Universidad Gerardo Barrios",

        intereses: "Intereses",

        habilidadesDuras: "Habilidades duras",
        habilidadesBlandas: "Habilidades blandas",

        comunicacion: "Comunicación",
        comunicacionDesc: "Expresar ideas de forma clara, precisa y efectiva.",

        trabajoEquipo: "Trabajo en equipo",
        trabajoEquipoDesc: "Cooperar activamente para lograr objetivos comunes.",

        liderazgo: "Liderazgo",
        liderazgoDesc: "Motivar y guiar al equipo hacia el logro de metas.",

        tomaDecisiones: "Toma de decisiones",
        tomaDecisionesDesc: "Elegir soluciones basadas en su valor.",

        escuchaActiva: "Escucha activa",
        escuchaActivaDesc: "Comprender para mejorar la comunicación.",

        compromiso: "Compromiso",
        compromisoDesc: "Asumir responsabilidades con dedicación.",

        proyectos: "Proyectos",

        proyecto1: "Comunicado digital",
        proyecto1Desc: "Plataforma web de periodismo comunitario que permite a los usuarios publicar noticias y denuncias (públicas o anónimas). El contenido es revisado por administradores antes de su publicación, promoviendo información responsable y participación ciudadana.",

        proyecto2: "Donamiga",
        proyecto2Desc: "Plataforma digital de donaciones que permite a los usuarios solicitar o brindar apoyo mediante dinero, bienes o servicios. Las solicitudes son validadas y gestionadas por administradores para garantizar transparencia, confianza y una correcta distribución de la ayuda.",

        proyecto3: "Good Burguer",
        proyecto3Desc: "Plataforma web para el restaurante Good Burguer que permite a los usuarios ver el menú, personalizar pedidos y realizar órdenes en línea. También facilita consultar la ubicación del local, mejorando la experiencia del cliente y optimizando el proceso de atención.",

        tipoProyecto: "Proyecto académico",
        rolPO: "Product Owner",
        rolFE: "Desarrollador Front-end",
        verProyecto: "Ver proyecto",

        footerFrase: "Estrategia, tecnología y valor en cada decisión.",
        redes: "Redes",
        derechos: "© 2026 Daniel Vargas. Todos los derechos reservados.",

        nombreLabel: "Nombre",
        correoLabel: "Correo electrónico",
        mensajeLabel: "Mensaje",
        enviar: "Enviar mensaje",
        mensajeExito: "¡Mensaje enviado correctamente! Te responderé pronto.",
        mensajeError: "Ocurrió un error al enviar el mensaje. Intenta de nuevo.",

        logros: "Logros",
        todos: "Todos",
        certificados: "Certificados",
        diplomas: "Diplomas",
        certificado: "Certificado",
        diploma: "Diploma",
        cert1: "CCNA: Introducción a las redes",
        cert2: "CCNA: Conmutación, Enrutamiento y Redes Inalámbricas",
        cert3: "Congreso CLIC 2023",
        cert4: "Summit Techtrend 2024",
        cert5: "Técnicas de Expresión Oral y Escrita",
        cert6: "Networking Challenge 2026 — 1er Lugar",
        cert7: "Robótica FLISOL 2026 — 3er Lugar",
    },

    en: {
        navFrase: "Strategy, technology, and value in every decision.",
        inicio: "Home",
        sobreMi: "About Me",
        habilidades: "Skills",
        proyectos: "Projects",
        contacto: "Contact",
        hola: "Hi, I'm Daniel.",
        titulo: "Passionate about IT project management.",
        descripcion: "Focused on maximizing product value through strategic decisions, effective prioritization and a strong user-centered vision.",
        contactame: "Contact Me",
        descargarCV: "Download CV", 

        aboutTitle: "About Me",
        aboutText1: "I am Daniel Vargas, a student passionate about technology and digital solution development, with a strong interest in product management and agile methodologies such as Scrum. I have experience in academic projects involving web development and databases, using tools like Azure DevOps for task management. I stand out for being responsible, analytical, and constantly learning, always seeking to add value and grow professionally in the technology field.",

        educacion: "Education",
        carrera: "Systems and Network Engineering",
        universidad: "Gerardo Barrios University",

        intereses: "Interests",

        habilidadesDuras: "Hard Skills",
        habilidadesBlandas: "Soft Skills",

        comunicacion: "Communication",
        comunicacionDesc: "Express ideas clearly, precisely, and effectively.",

        trabajoEquipo: "Teamwork",
        trabajoEquipoDesc: "Actively collaborate to achieve common goals.",

        liderazgo: "Leadership",
        liderazgoDesc: "Motivate and guide the team toward achieving goals.",

        tomaDecisiones: "Decision Making",
        tomaDecisionesDesc: "Choose solutions based on their value.",

        escuchaActiva: "Active Listening",
        escuchaActivaDesc: "Understand others to improve communication.",

        compromiso: "Commitment",
        compromisoDesc: "Take responsibility with dedication.",

         proyectos: "Projects",

        proyecto1: "Digital Bulletin",
        proyecto1Desc: "Community journalism web platform that allows users to publish news and reports (public or anonymous). Content is reviewed by administrators before publication, promoting responsible information and citizen participation.",

        proyecto2: "Donamiga",
        proyecto2Desc: "Digital donation platform that allows users to request or provide support through money, goods, or services. Requests are validated and managed by administrators to ensure transparency, trust, and proper distribution of aid.",

        proyecto3: "Good Burguer",
        proyecto3Desc: "Web platform for the Good Burguer restaurant that allows users to view the menu, customize orders, and place orders online. It also provides location information, improving customer experience and optimizing service processes.",

        tipoProyecto: "Academic Project",
        rolPO: "Product Owner",
        rolFE: "Front-end Developer",
        verProyecto: "View Project",

        footerFrase: "Strategy, technology, and value in every decision.",
        redes: "Social Media",
        derechos: "© 2026 Daniel Vargas. All rights reserved.",

        nombreLabel: "Name",
        correoLabel: "Email",
        mensajeLabel: "Message",
        enviar: "Send message",
        mensajeExito: "Message sent successfully! I'll get back to you soon.",
        mensajeError: "An error occurred while sending the message. Please try again.",

        logros: "Achievements",
        todos: "All",
        certificados: "Certificates",
        diplomas: "Diplomas",
        certificado: "Certificate",
        diploma: "Diploma",
        cert1: "CCNA: Introduction to Networks",
        cert2: "CCNA: Switching, Routing and Wireless Essentials",
        cert3: "CLIC Congress 2023",       
        cert4: "Summit Techtrend 2024",
        cert5: "Oral and Written Expression Techniques",
        cert6: "Networking Challenge 2026 — 1st Place",
        cert7: "Robotics FLISOL 2026 — 3rd Place",
    }
};

// 🔥 traducir todo
function applyTranslations() {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// 🔽 abrir/cerrar dropdown
languageToggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// 🌍 seleccionar idioma
options.forEach(option => {
    option.addEventListener("click", () => {
        currentLang = option.getAttribute("data-lang-option");

        applyTranslations();

        languageToggle.textContent = currentLang === "es" ? "ES ▾" : "EN ▾";

        dropdown.classList.remove("active");
    });
});

// ❌ cerrar si haces click fuera
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

// aplicar al cargar
applyTranslations();


// ===== NAVBAR ACTIVO =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
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


// ===== MODAL =====
document.addEventListener("DOMContentLoaded", () => {

    let currentImages = [];
    let currentIndex = 0;

    window.openModal = function(index) {
        const modal = document.getElementById("projectModal");
        const card = document.querySelectorAll(".project-card")[index];

        currentImages = Array.from(card.querySelectorAll(".carousel img")).map(img => img.src);
        currentIndex = 0;

        document.getElementById("modalImage").src = currentImages[0];
        document.getElementById("modalTitle").innerText = card.querySelector("h3").innerText;
        document.getElementById("modalDesc").innerText = card.querySelector("p").innerText;

        modal.classList.add("active");
    };

    document.querySelector(".next").onclick = () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
    };

    document.querySelector(".prev").onclick = () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
    };

    document.querySelector(".close").onclick = () => {
        projectModal.classList.remove("active");
    };

    window.onclick = (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove("active");
        }
    };
});


// ===== CARRUSEL TARJETAS =====
document.querySelectorAll(".carousel").forEach(carousel => {
    let images = carousel.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3000);
});
// ===== FILTROS CERTIFICADOS =====
const certFilters = document.querySelectorAll('.cert-filter');
const certCards = document.querySelectorAll('.cert-card');

certFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        certFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const value = filter.getAttribute('data-filter');

        certCards.forEach(card => {
            if (value === 'all' || card.getAttribute('data-category') === value) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== MODAL CERTIFICADOS =====
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certClose = document.querySelector('.cert-close');

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('.cert-img img');
        certModalImg.src = img.src;
        certModal.classList.add('active');
    });
});

certClose.addEventListener('click', () => {
    certModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.classList.remove('active');
    }
});
// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Cerrar menú al dar clic en un enlace
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});