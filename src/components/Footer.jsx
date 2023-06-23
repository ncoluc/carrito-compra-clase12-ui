import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="contacto" className="contacto-section">
          <div>
            <h2>CONTACTO</h2>
            <ul>
              <li>
                Unicenter Shopping - Parana 6902, Buenos Aires -
                <a href="https://goo.gl/maps/GSoWq4cEcpS1HJh97" target="_blank" rel="noreferrer">
                  (Link GoogleMap)
                </a>
              </li>
              <li>
                <a href="tel:+01146049100">Tel: 011-46049100</a>
              </li>
              <li>
                <a href="mailto:colu.snikers@gmail.com">Email: colu.snikers@gmail.com</a>
              </li>
            </ul>
          </div>
        </section>
        <p>© 2023 Colu's Snikers. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Footer;
