import React from "react";
import styled from "styled-components";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import emailIcon from "../assets/icons/email.svg";

const IntroductionContainer = styled.section`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  min-height: 100vh; /* Ocupa toda la pantalla */
  padding: 0 2rem;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    height: auto;
    text-align: center;
    justify-content: center;
  }
`;

const IntroductionTextContainer = styled.div`
  width: 60%;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const IntroductionText = styled.p`
  font-size: 1.2rem;
  text-wrap: balance;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Efecto de sombra al texto */
  opacity: 0; /* Estado inicial: completamente transparente */
  animation: fadeInText 1s ease forwards;
  animation-delay: 3s; /* Agrega un retraso de 2 segundos antes de comenzar la animación */

  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 740px) {
    font-size: 1.1rem;
    
  }

  @media (max-width: 600px) {
    font-size: 0.83rem;
    margin-top: 10px;
  }
`;

const IntroductionTitle = styled.h2`
  font-size: 2.5rem;
  max-width: 665px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra al título */
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid white; /* Simula un cursor escribiendo */
  animation: typing 3s steps(50, end),
    /* Agrega una animación de escritura */ blink-caret 0.5s step-end infinite; /* Agrega una animación de cursor parpadeante */

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }

  @media (max-width: 1000px) {
    font-size: 2.1rem;
    margin: 1rem auto 0; /* Agrega un margen superior */
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin: 1rem auto 0; /* Agrega un margen superior */
  }
`;

const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;

const IntroductionImage = styled.img`
  width: 100%; /* Porcentaje relativo al contenedor padre */
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  img {
    width: 40px;
    height: 40px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <div>
        <IntroductionTitle>
          Luis Ramirez : Desarrollador Full Stack
        </IntroductionTitle>
        <IntroductionTextContainer>
          <IntroductionText>
            Ingeniero con pasión por la tecnología, autodidacta, y enfoque
            especializado en el desarrollo backend. Poseo amplios conocimientos
            en Python y Javascript, incluyendo diversos frameworks como React,
            C# .NET y Ruby on Rails, entre otros.
          </IntroductionText>
        </IntroductionTextContainer>
      </div>
      <PersonalContainer>
        <IntroductionImage
          src={require("../assets/images/yo-min.jpg")}
          alt="Foto de Luis Ramirez"
        />
        <SocialIcons>
          <SocialLink
            href="https://www.linkedin.com/in/luis-ramirez-pardo-544294189/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </SocialLink>
          <SocialLink
            href="https://github.com/luchitoide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </SocialLink>
          <SocialLink
            href="mailto:luchitoiderp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="Correo electrónico" />
          </SocialLink>
        </SocialIcons>
      </PersonalContainer>
    </IntroductionContainer>
  );
};

export default Introduction;
