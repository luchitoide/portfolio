import React from "react";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";

import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";

const IntroductionContainer = styled.section`
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

const IntroductionText = styled.p`
  font-size: 1.2rem;
  text-wrap: balance;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Efecto de sombra al texto */
  width: 60%;
  animation: fadeInText 2s ease backwards;
  animation-delay: 3s;

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

  @media (max-width: 850px) {
    width: 100%;
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
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra al título */
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid var(--text-color); /* Simula un cursor escribiendo */
  animation: typing 3s steps(50, end), blink-caret 0.5s step-end infinite;

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
      border-color: var(--text-color);
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

  @media (max-width: 400px) {
    font-size: 1.2rem;
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
  font-size: 1.8rem;
  color: #999;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ff7f50; /* Cambia el color al pasar el cursor */
    transform: scale(1.1); /* Efecto de zoom al pasar el cursor */
  }
`;

const Introduction = () => {
  return (
    <IntroductionContainer id="inicio">
      <div>
        <IntroductionTitle>
          Luis Ramirez : Desarrollador Full Stack
        </IntroductionTitle>
        <IntroductionText>
          Ingeniero con pasión por la tecnología, autodidacta y enfoque
          especializado en el desarrollo backend. Poseo conocimientos en varios
          lenguajes como Python, C# .NET, Ruby on Rails y Javascript,
          incluyendo diversos frameworks como React y NextJs.
        </IntroductionText>
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
            <SiLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/luchitoide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </SocialLink>
          <SocialLink
            href="mailto:luchitoiderp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiMailSend />
          </SocialLink>
        </SocialIcons>
      </PersonalContainer>
    </IntroductionContainer>
  );
};

export default Introduction;
