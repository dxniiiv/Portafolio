<section id="contacto" class="contact">

    <h3 class="section-title" data-lang="contacto">Contacto</h3>

    <div class="contact-container">

        <form action="https://formsubmit.co/daniiielvargas27@gmail.com" method="POST">

            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="https://www.danielvargass.com?status=success">
            <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portafolio">

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

</section>