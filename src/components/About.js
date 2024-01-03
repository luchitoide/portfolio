import React, { useState } from "react";
import styled from "styled-components";
import {
  FaGraduationCap, // Importa ícono para estudios
  FaBriefcase, // Importa ícono para experiencia
} from "react-icons/fa";
import Modal from "./Modal";

const AboutSection = styled.section`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: var(--background-color-alt);
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Titles = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 820px;
`;

const VerticalLine = styled.div`
  border-left: 2px solid #ff7f50;
  border-right: 2px solid #ff7f50;
  height: 50dvh;
  max-height: 500px;
  position: relative;
  @media (max-width: 430px) {
    height: 40vh;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: var(--background-color-alt);
  border: 3px solid #ff7f50; /* Borde del círculo */
  border-radius: 50%; /* Para hacerlo circular */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;

const AboutItem = styled.div`
  position: absolute;
  max-width: 385px;
  padding: 1rem;
  background-color: var(--project-color);
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 0.25rem;
  @media (max-width: 730px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const Entity = styled.p`
  font-size: 16px;
  margin-bottom: 0.25rem;
  @media (max-width: 730px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: #555;
  @media (max-width: 730px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemTitle, setSelectedItemTitle] = useState(""); // Almacena el título del elemento seleccionado

  const openModal = (title) => {
    setSelectedItemTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AboutSection id="about">
      <h2 className="text-4xl mb-10 text-center">Sobre Mi</h2>
      <Titles>
        <h4 className="text-2xl mb-10 text-center flex-1">Estudios</h4>
        <h4 className="text-2xl mb-10 text-center flex-1">Experiencia</h4>
      </Titles>
      <ContentWrapper>
        <VerticalLine>
        <AboutItem
            onClick={() => openModal(5)}
            style={{
              top: "0%",
              right: "100%",
              transform: "translateX(-10%)",
              width: "40vw",
            }}
          >
            <Title>Diplomado FullStack Developer</Title>
            <Entity>Universidad Piloto de Colombia</Entity>
            <Date>Agosto 2023 - Noviembre 2023</Date>
          </AboutItem>
          <Circle style={{ top: "0%", transform: "translateX(-50%)" }}>
            <FaGraduationCap />
          </Circle>
          <AboutItem
            onClick={() => openModal(1)}
            style={{
              top: "25%",
              left: "100%",
              transform: "translateX(10%)",
              width: "40vw",
            }}
          >
            <Title>Tutor de Programación</Title>
            <Entity>Kodland</Entity>
            <Date>Abril 2023 - Diciembre 2023</Date>
          </AboutItem>
          <Circle style={{ top: "0%", transform: "translateX(-50%)" }}>
            <FaBriefcase /> {/* Icono para trabajos */}
          </Circle>
          <AboutItem
            onClick={() => openModal(2)}
            style={{
              top: "50%",
              right: "100%",
              transform: "translateX(-10%)",
              width: "40vw",
            }}
          >
            <Title>Curso de Desarrollador Full-Stack JavaScript</Title>
            <Entity>Platzi</Entity>
            <Date>Noviembre 2022 - Julio 2023</Date>
          </AboutItem>
          <Circle style={{ top: "33%", transform: "translateX(-50%)" }}>
            <FaGraduationCap /> {/* Icono para estudios */}
          </Circle>
          <AboutItem
            onClick={() => openModal(3)}
            style={{
              top: "75%",
              left: "100%",
              transform: "translateX(10%)",
              width: "40vw",
            }}
          >
            <Title>Ingeniero de Soporte It</Title>
            <Entity>Serviexchange</Entity>
            <Date>abril 2021 - Actualidad</Date>
          </AboutItem>
          <Circle style={{ top: "66%", transform: "translateX(-50%)" }}>
            <FaBriefcase /> {/* Icono para estudios */}
          </Circle>
          <AboutItem
            onClick={() => openModal(4)}
            style={{
              top: "99%",
              right: "100%",
              transform: "translateX(-10%)",
              width: "40vw",
            }}
          >
            <Title>Ingeniería Biomédica</Title>
            <Entity>
              Universidad del Rosario - Escuela Colombiana de Ingeniería
            </Entity>
            <Date>Enero 2012- Diciembre 2018</Date>
          </AboutItem>
          <Circle style={{ top: "99%", transform: "translateX(-50%)" }}>
            <FaGraduationCap /> {/* Icono para experiencia */}
          </Circle>
        </VerticalLine>
      </ContentWrapper>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        itemTitle={selectedItemTitle}
      />
    </AboutSection>
  );
};

export default About;
