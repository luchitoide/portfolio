import React, { useState } from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs,FaReact } from "react-icons/fa";
import { BiLogoTypescript,BiLogoFirebase } from "react-icons/bi";

const technologyIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  ts: <BiLogoTypescript/>,
  fbase: <BiLogoFirebase/>,
};

const projects = [
  {
    title: "To Do List",
    description: "A simple to do list app using react + typecript + redux and firebase",
    technologies: ["html", "css", "react", "ts", "fbase"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "https://todo-list-luchitoide.vercel.app/ ",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    technologies: ["js", "css"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "url-del-proyecto-2",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    technologies: ["js", "css"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "url-del-proyecto-2",
  },
  {
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    technologies: ["js", "css"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "url-del-proyecto-2",
  },

  // Agrega más proyectos aquí
];

const ProjectsContainer = styled.section`
  background-color: #f4f4f4;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Cambiado a flex-start para alinear proyectos arriba */
  gap: 1rem;
  overflow: hidden;
  width: 700px; /* Cambiado el ancho total para acomodar 2 proyectos */
  margin: 0 auto; /* Centrado horizontal */
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px; /* Ajusta el ancho según tus necesidades */
  display: flex;
  flex-direction: column;

  img {
    width: 300px; /* Ajusta el tamaño de la miniatura según tus necesidades */
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 1rem;
    cursor: pointer; /* Cambio de cursor al pasar por la imagen */
  }

  h3 {
    cursor: pointer; /* Cambio de cursor al pasar por el título */
  }
`;
const TechnologyIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center
`;

const TechnologyIcon = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between; /* Distribuir botones en los extremos */
  width: 100%; /* Ancho completo para abarcar toda la sección */
  max-width: 700px; /* Limitar el ancho para que coincida con el ancho de proyectos */
  margin: 1rem auto 0; /* Centrado horizontal */
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showPreviousProjects = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const showNextProjects = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <ProjectsContainer>
      <h2 className="text-3xl mb-4 text-center">Mis Proyectos</h2>
      <ProjectList >
        {[startIndex, (startIndex + 1) % projects.length].map((index) => (
          <ProjectCard key={index}>
            <a href={projects[index].url} target="_blank" rel="noopener noreferrer">
              <img src={projects[index].thumbnail} alt={projects[index].title} />
            </a>
            <ProjectInfo>
              <a href={projects[index].url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl mb-2 text-center">{projects[index].title}</h3>
              </a>
              <p className="text-gray-700">{projects[index].description}</p>
              <TechnologyIcons>
                {projects[index].technologies.map((tech, techIndex) => (
                  <TechnologyIcon key={techIndex}>
                    {technologyIcons[tech]}
                  </TechnologyIcon>
                ))}
              </TechnologyIcons>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectList>
      <NavigationButtons>
        <Button onClick={showPreviousProjects}>&#8592;</Button>
        <Button onClick={showNextProjects}>&#8594;</Button>
      </NavigationButtons>
    </ProjectsContainer>
  );
};

export default Projects;