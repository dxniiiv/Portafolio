# 🌐 Portafolio Personal — Daniel Vargas

Portafolio web personal desarrollado para presentar mi perfil profesional, proyectos académicos, habilidades, logros y canales de contacto.

---

## 📋 Descripción

Sitio web responsive y bilingüe (ES/EN) construido con PHP, HTML, CSS y JavaScript puro. Incluye formulario de contacto funcional con envío de correo mediante PHPMailer y SMTP de Gmail.

---

## 🗂️ Estructura del proyecto

```
portafolio/
├── index.php                  # Archivo principal
├── send_mail.php              # Procesador del formulario de contacto
├── composer.json              # Dependencias PHP
├── vendor/                    # PHPMailer (generado por Composer)
├── style.css                  # Estilos globales
├── script.js                  # Lógica del sitio
│
├── sections/                  # Secciones del sitio
│   ├── hero.php               # Sección de presentación
│   ├── about.php              # Sección sobre mí
│   ├── skills.php             # Sección de habilidades
│   ├── projects.php           # Sección de proyectos
│   ├── certifications.php     # Sección de logros y certificados
│   └── contact.php            # Sección de contacto
│
├── includes/                  # Componentes reutilizables
│   ├── navbar.php             # Barra de navegación
│   └── footer.php             # Pie de página
│
├── img/                       # Imágenes del sitio
│   ├── cv.png                 # Foto de perfil
│   ├── logo_footer.png        # Logo
│   ├── icon-azure.webp        # Iconos de habilidades
│   ├── certificado_ccna1.png  # Certificados
│   ├── certificado_ccna2.png
│   ├── certificado_redes.jpeg
│   ├── certificado_robotica.png
│   ├── Certificado_congreso23.png
│   ├── Certificado_congreso24.png
│   ├── Diploma_23.png
│   └── ...
│
└── pdf/                       # CVs descargables
    ├── curriculum_esp.pdf
    └── curriculum_eng.pdf
```

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **PHP** | Estructura del sitio e inclusión de componentes |
| **HTML5** | Marcado semántico |
| **CSS3** | Estilos, animaciones y diseño responsive |
| **JavaScript** | Interactividad, traducciones y modal |
| **PHPMailer** | Envío de correos desde el formulario de contacto |
| **Boxicons** | Iconografía |
| **Google Fonts** | Tipografías Poppins y Open Sans |

---

## ✨ Funcionalidades

- ✅ Diseño responsive para móvil, tablet y desktop
- ✅ Menú hamburguesa en dispositivos móviles
- ✅ Cambio de idioma ES/EN en tiempo real
- ✅ Navbar activo según sección visible en pantalla
- ✅ Carrusel automático en tarjetas de proyectos
- ✅ Modal de proyectos con galería de imágenes
- ✅ Filtros de certificados y diplomas
- ✅ Modal de vista ampliada para certificados
- ✅ Formulario de contacto funcional con PHPMailer
- ✅ Descarga de CV en español e inglés

---

## 📦 Dependencias

```json
{
    "require": {
        "phpmailer/phpmailer": "^6.8"
    }
}
```

---

## ⚙️ Instalación local con XAMPP

**1. Clonar o descargar el proyecto**
```bash
git clone https://github.com/dxniiiv/portafolio.git
```

**2. Mover a la carpeta de XAMPP**
```
C:/xampp/htdocs/portafolio/
```

**3. Instalar dependencias**
```bash
composer install
```

**4. Iniciar Apache en XAMPP**

**5. Abrir en el navegador**
```
http://localhost/portafolio/
```

---

## 🚀 Despliegue en Hostinger

**1. Subir todos los archivos** al panel de Hostinger via administrador de archivos o FTP hacia la carpeta `public_html`

**2. Instalar PHPMailer en el servidor**

Acceder via SSH al panel de Hostinger y ejecutar:
```bash
cd public_html
composer install
```

O alternativamente instalar Composer localmente, ejecutar `composer install` y subir la carpeta `vendor` junto con los demás archivos.

**3. Verificar configuración PHP**

En el panel de Hostinger ir a **PHP Configuration** y verificar que la extensión `openssl` esté habilitada.

**4. Configurar credenciales de correo**

En `send_mail.php` asegurarse que las credenciales sean correctas:
```php
$mail->Username = 'tu-correo@gmail.com';
$mail->Password = 'contraseña-de-aplicacion-gmail';
```

> ⚠️ La contraseña de aplicación se genera desde **Google Account → Seguridad → Contraseñas de aplicaciones**. Nunca subas este archivo a GitHub.

---

## 🔒 Seguridad

- El archivo `send_mail.php` contiene credenciales sensibles y debe agregarse al `.gitignore`
- La contraseña utilizada es una **contraseña de aplicación** de Gmail, no la contraseña principal de la cuenta

Agrega esto en tu `.gitignore`:
```
send_mail.php
vendor/
```

---

## 📬 Contacto

**Daniel Vargas**
- 📧 daniielvargas0@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/daniel-vargas-2154483ab)
- 📱 +503 6167 6359

---

© 2026 Daniel Vargas. Todos los derechos reservados.