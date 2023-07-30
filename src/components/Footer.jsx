import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-lg-start text-white">
        {/* Contenedor de la cuadrícula */}
        <div className="container p-4">
          {/* Fila de la cuadrícula */}
          <div className="row mt-4">
            {/* Columna de la cuadrícula */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Explorar</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-gamepad fa-fw fa-sm me-2" />
                    Videojuegos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-headphones fa-fw fa-sm me-2" />
                    Accesorios para gaming
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-keyboard fa-fw fa-sm me-2" />
                    Teclados para gaming
                  </a>
                </li>
              </ul>
            </div>
            {/* Columna de la cuadrícula */}
            {/* Columna de la cuadrícula */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Soporte</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-question-circle fa-fw fa-sm me-2" />
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-phone fa-fw fa-sm me-2" />
                    Contáctanos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-comments fa-fw fa-sm me-2" />
                    Chat en vivo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Visítanos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    The Vault Tienda de Videojuegos
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    72 Faxcol Dr
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    Gotham City, NJ 12345
                  </a>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Mantente Conectado</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-at fa-fw fa-sm me-2" />
                    Suscríbete al Boletín
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-envelope fa-fw fa-sm me-2" />
                    Soporte al Cliente
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-decoration-none">
                    <i className="fas fa-heart fa-fw fa-sm me-2" />
                    Califica Nuestro Servicio
                  </a>
                </li>
              </ul>
            </div>
            {/* Columna de la cuadrícula */}
          </div>
          {/* Fila de la cuadrícula */}
        </div>
        {/* Contenedor de la cuadrícula */}
        {/* Derechos de autor */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} The Vault Tienda de Videojuegos. Todos los derechos reservados.
        </div>
        {/* Derechos de autor */}
      </footer>
    </>
  );
};

export default Footer;
