<section id="contacto" class="contact">

    <h3 class="section-title" data-lang="contacto">Contacto</h3>

    <div class="contact-container">

        <form id="contactForm" action="send_mail.php" method="POST">

            <div class="form-group">
                <label data-lang="nombreLabel">Nombre</label>
                <input type="text" name="nombre" placeholder="Tu nombre" required>
            </div>

            <div class="form-group">
                <label data-lang="correoLabel">Correo electrónico</label>
                <input type="email" name="correo" placeholder="tucorreo@gmail.com" required>
            </div>

            <div class="form-group">
                <label data-lang="mensajeLabel">Mensaje</label>
                <textarea name="mensaje" rows="5" placeholder="Escribe tu mensaje..." required></textarea>
            </div>

            <button type="submit" class="btn primary">
                <i class='bx bx-send'></i>
                <span data-lang="enviar">Enviar mensaje</span>
            </button>

        </form>

    </div>

    <div id="formMessage" class="form-message" style="display:none;"></div>

</section>