import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript, BiLogoFirebase } from "react-icons/bi";
import { register } from "swiper/element/bundle";

const technologyIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  ts: <BiLogoTypescript />,
  fbase: <BiLogoFirebase />,
};

const projects = [
  {
    title: "To Do List",
    description:
      "A simple to do list app using react + typecript + redux and firebase",
    technologies: ["html", "css", "react", "ts", "fbase"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "https://todo-list-luchitoide.vercel.app/ ",
  },
  {
    title: "React Shop",
    description:
      "A template for a e-commerce website using React and APi for products details",
    technologies: ["js", "css", "react"],
    thumbnail: require("../assets/projects/storeReact.png"),
    url: "https://luchitoide.github.io/tienda-react/",
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
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease; /* Agrega una animación de entrada */
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  max-width: 780px;
  width: 100%;
  padding: 40px 0;
  @media (min-width: 1800px) {
    /* Ajusta el ancho total para acomodar 2 proyectos en pantallas grandes */
    max-width: 1150px;
  }
  @media (max-width: 750px) {
    /* Ajusta el ancho total para acomodar 2 proyectos en pantallas grandes */
    max-width: 420px;
  }
`;

const ProjectList = styled.div`
  margin: 0 40px;
  overflow: hidden;
  border-radius: 10px;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras más pronunciadas */
  }
`;

const TechnologyIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: center;
`;

const TechnologyIcon = styled.div`
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ff7f50; /* Cambia el color al pasar el cursor */
    transform: scale(1.1); /* Efecto de zoom al pasar el cursor */
  }
`;

const ProjectInfo = styled.div`
  flex: 1;
`;

const Projects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      loop: true,
      grabCursor: "true",
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          navigation: {
            enable: "false",
          },
        },
        750: {
          slidesPerView: 2,
          navigation: {
            enable: "true",
          },
        },
        1800: {
          slidesPerView: 3,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <ProjectsContainer>
      <h2 className="text-4xl mb-4 text-center">Mis Proyectos</h2>
      <Container>
        <ProjectList>
          <swiper-container init="false" ref={swiperRef}>
            {projects.map((project) => (
              <swiper-slide>
                <ProjectCard>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.thumbnail} alt={project.title} />
                  </a>
                  <ProjectInfo>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-xl mb-2 text-center">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-700">{project.description}</p>
                    <TechnologyIcons>
                      {project.technologies.map((tech, techIndex) => (
                        <TechnologyIcon key={techIndex} title={tech}>
                          {technologyIcons[tech]}
                        </TechnologyIcon>
                      ))}
                    </TechnologyIcons>
                  </ProjectInfo>
                </ProjectCard>
                <div class="swiper-button-next swiper-navBtn"></div>
                <div class="swiper-button-prev swiper-navBtn"></div>
              </swiper-slide>
            ))}
          </swiper-container>
        </ProjectList>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
