import React from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs,FaReact } from "react-icons/fa";
import {siTypescript} from "simple-icons";

const technologyIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  ts: <siTypescript/>,
};

const projects = [
  {
    title: "To Do List",
    description: "A simple to do list app using react + typecript + redux and firebase",
    technologies: ["html", "css", "react"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "https://todo-list-luchitoide.vercel.app/ ",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    technologies: ["js", "css"],
    thumbnail: "../assets/icons/github.svg",
    url: "url-del-proyecto-2",
  },

  // Agrega más proyectos aquí
];

const ProjectsContainer = styled.section`
  background-color: #f4f4f4;
  padding: 3rem 0;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ProjectCard = styled.a`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px; /* Ajusta el ancho según tus necesidades */
  display: flex;
  flex-direction: column;
  text-decoration: none; /* Quitamos la decoración de enlace */

  img {
    width: 300px; /* Ajusta el tamaño de la miniatura según tus necesidades */
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 1rem;
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

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2 className="text-3xl mb-4 text-center">Mis Proyectos</h2>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index} href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.thumbnail} alt={project.title} />
            <ProjectInfo>
              <h3 className="text-xl mb-2 text-center">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <TechnologyIcons>
                {project.technologies.map((tech, techIndex) => (
                  <TechnologyIcon key={techIndex}>
                    {technologyIcons[tech]}
                  </TechnologyIcon>
                ))}
              </TechnologyIcons>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
