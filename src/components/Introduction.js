import React from "react";
import styled from "styled-components";

const IntroductionContainer = styled.section`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: white;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  height: 300px; /* Tamaño fijo de la sección */
`;

const IntroductionText = styled.p`
  font-size: 1.2rem;
  width: 60%;
  margin-left: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Efecto de sombra al texto */

  @media (max-width: 740px) {
    font-size: 1.1rem;
    width: 80%;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 100%;
  }
`;

const IntroductionTitle = styled.h2`
  font-size: 2.5rem;
  margin-right: 2rem;
  margin-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra al título */

  @media (max-width: 740px) {
    font-size: 2.1rem;
    margin-right: 0;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const IntroductionImage = styled.img`
  margin-right: 1rem;
  width: 250px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 200px;
    margin-right: 0;
  }
`;
const Introduction = () => {
  return (
    <IntroductionContainer>
      <div>
        <IntroductionTitle>
          Luis Ramirez: Desarrollador Full Stack
        </IntroductionTitle>
        <IntroductionText>
          Ingeniero con pasion por la tecnologia, amante de los videojuegos y la
          programacion, aprendiendo cada dia mas y mas buscando la creacion de
          soluciones innovadoras.
        </IntroductionText>
      </div>
      <IntroductionImage
        src={require("../assets/images/yo-min.jpg")}
        alt="Foto de Luis Ramirez"
      />
    </IntroductionContainer>
  );
};

export default Introduction;
