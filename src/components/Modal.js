import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--project-color);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  min-width: 40%;
  min-height: 40%;
  max-width: 80%;
  text-align: center;
  position: relative;
  @media (max-width: 730px) {
    font-size: 14px;
  }
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

const CloseButton = styled.button`
position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #ff7f50; /* Color del texto "X" */
  padding: 5px 10px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background-color: #ff7f50; /* Cambia el color de fondo al pasar el cursor */
    color: #fff; /* Cambia el color del texto al pasar el cursor */
    transform: scale(1.1); /* Efecto de zoom al pasar el cursor */
  }
`;
const DetailsSection = styled.div`
  margin-top: 20px;
`;

const DetailsTitle = styled.p`
  font-weight: bold;
  margin-top: 10px;
  
`;

const DetailsList = styled.ul`
  margin-top: 5px;
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
`;

const Modal = ({ isOpen, onClose, itemTitle }) => {
  if (!isOpen) return null;

  // Lógica para mostrar detalles basados en itemTitle
  let itemDetails = {};

  if (itemTitle === 1) {
    itemDetails = {
      title: "Tutor de Programación",
      entity: "Kodland",
      date: "abril 2023 - Actualidad",
      details: [
        "Planificar y preparar lecciones y materiales para la educación de programación en Scratch y Python.",
        "Impartir clases y talleres de Scratch y Python, adaptando el contenido a la edad y el nivel de los estudiantes.",
        "Evaluar el progreso de los estudiantes y proporcionar retroalimentación y apoyo.",
        "Colaborar con otros tutores y el personal para cumplir con los objetivos educativos.",
      ],
    };
  } else if (itemTitle === 2) {
    itemDetails = {
      title: "Curso de Desarrollo Full-Stack JavaScript",
      entity: "Platzi",
      date: "Noviembre 2022 - Julio 2023",
      details: [
        "Control de versiones con Git y GitHub",
        "Programación en JavaScript",
        "Desarrollo de interfaces de usuario con React.js",
        "Desarrollo de aplicaciones del lado del servidor con Node.js",
        "Gestión de bases de datos PostgreSQL",
        "Creación de servicios web robustos con Express.js"
      ],
    };
  }else if (itemTitle === 3) {
    itemDetails = {
      title: "Ingeniero de Soporte It",
      entity: "Serviexchange",
      date: "abril 2021 - Actualidad",
      details: [
        "Análisis de datos a través de aplicación codificada en Google Script.",
        "Pruebas de software en JavaScript / Django.",
        "Coordinación y supervisión del proceso de conciliación a través de Tier3.",
        "Proporcionar soporte técnico remoto para hardware y software.",
        "Realizar mantenimiento preventivo en el equipo de la empresa.",
        "Garantizar precisión y cumplimiento en todas las tareas asignadas."
      ],
    };
  }else if (itemTitle === 4) {
    itemDetails = {
      title: "Ingeniería Biomédica",
      entity: "Universidad del Rosario - Escuela Colombiana de Ingeniería",
      date: "Enero 2012- Diciembre 2018",
      details: [
        "Utilización de Python para crear interfaces visuales de aplicaciones y controlar dispositivos robóticos.",
        "Análisis de imágenes y creación de modelos lógicos utilizando MATLAB.",
        "Desarrollo de videojuegos en Unity utilizando C#.",
        "Programación de placas de desarrollo como Arduino para la creación de robots, como un carro seguidor de línea.",
        "Aprendizaje y programación de microcontroladores PIC para diversos proyectos.",
      ],
    };
  }
  // Agrega más condiciones para otros títulos si es necesario

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>{itemDetails.title}</h3>
        <p>Entidad: {itemDetails.entity}</p>
        <p>Fecha: {itemDetails.date}</p>
        <DetailsSection>
          <DetailsTitle>Detalles:</DetailsTitle>
          <DetailsList>
            {itemDetails.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </DetailsList>
        </DetailsSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;