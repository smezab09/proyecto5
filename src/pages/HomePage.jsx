import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles.css";

const HomePage = () => {
  return (
    <>
      <Header title="Bienvenido a The Vault: Desbloquea tu Potencial Gaming" />
      <main className="row">
        <article className="col">
          <div className="welcome-section">
            <h2>Explora el Universo Gaming</h2>
            <p>
              En The Vault, hemos creado un santuario para los apasionados del gaming, un lugar donde los sueños digitales se hacen realidad. Sumérgete en nuestro universo gaming y descubre una experiencia única en la que la emoción y la tecnología se fusionan en una simbiosis perfecta.
            </p>
            <p>
              Nos enorgullecemos de ser más que una tienda. Somos el Rincón del Gamer, un refugio donde la comunidad gamer converge para compartir su pasión por los juegos, encontrar los títulos más emocionantes y equiparse con los últimos accesorios que potenciarán su experiencia de juego.
            </p>
            <p>
              En The Vault, encontrarás una vasta selección de consolas de última generación, videojuegos que desafiarán tus habilidades y accesorios de alta gama que te elevarán al siguiente nivel. Nuestro equipo de expertos está siempre dispuesto a asesorarte y brindarte el soporte que necesitas para encontrar exactamente lo que buscas.
            </p>
          </div>
          <div className="community-section">
            <h2>Únete a la Comunidad Gaming</h2>
            <p>
              Adéntrate en nuestro mundo, donde la emoción del gaming se fusiona con el misterio de un cofre secreto lleno de tesoros digitales. Descubre el poder de la comunidad gamer y sé parte de una familia unida por la pasión por los videojuegos.
            </p>
            <p>
              ¡The Vault te da la bienvenida al lugar donde los jugadores encuentran su tesoro gaming! ¿Estás listo para sumergirte en la experiencia definitiva para los amantes de los videojuegos?
            </p>
            <Link to="/login" className="join-button">Únete Ahora</Link>
          </div>
        </article>
      </main>
    </>
  );
};

export default HomePage;
