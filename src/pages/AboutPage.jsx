import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  return (
    <>
      <Header title="Sobre Nosotros" />
      <main className="row">
        <article className="col">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.itsitio.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-04-23-at-5.06.37-PM-2.jpeg"
                alt="Nuestra Tienda"
              />
              <Carousel.Caption>
                <h3>Nuestra Tienda</h3>
                <p>
                  En The Vault, somos una tienda especializada en productos
                  gaming, dedicada a brindar a nuestros clientes la mejor
                  experiencia en el mundo de los videojuegos. Nuestra pasión por
                  el gaming nos impulsa a ofrecer una amplia selección de
                  consolas, videojuegos y accesorios de alta calidad para
                  satisfacer las necesidades de cada jugador, desde los
                  entusiastas hasta los profesionales.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mobirise.com/extensions/gamingamp/assets/images/gaming110.jpg"
                alt="Nuestro Propósito"
              />
              <Carousel.Caption>
                <h3>Nuestro Propósito</h3>
                <p>
                  Nuestro propósito en The Vault es crear un espacio único donde
                  los amantes del gaming puedan encontrar todo lo que necesitan
                  para vivir una experiencia inigualable. Queremos ser el refugio
                  de la comunidad gamer, un lugar donde la pasión por los
                  videojuegos se convierte en un tesoro compartido. Nuestro equipo
                  está dedicado a proporcionar un servicio excepcional y
                  asesoramiento experto para que cada cliente encuentre exactamente
                  lo que busca.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3.eu-west-1.amazonaws.com/prod-mh-ireland/dd736430-2f50-4ded-9407-04a1ae609122/d2e15f01-8088-4a92-88df-bc7e20a0312a/dd736430-2f50-4ded-9407-04a1ae609122.jpg"
                alt="Nuestro Equipo"
              />
              <Carousel.Caption>
                <h3>Nuestro Equipo</h3>
                <p>
                  En The Vault, contamos con un equipo de apasionados gamers y
                  expertos en tecnología que comparten la misma pasión por los
                  videojuegos. Nos enorgullece tener un equipo diverso y dedicado,
                  siempre dispuesto a ayudar a nuestros clientes y proporcionar
                  recomendaciones personalizadas. Juntos, formamos una comunidad
                  unida por nuestra pasión por el gaming y estamos comprometidos
                  a brindar la mejor experiencia a cada persona que visita nuestra
                  tienda.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </article>
      </main>
    </>
  );
};

export default AboutPage;
