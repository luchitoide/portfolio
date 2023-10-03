import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript, BiLogoFirebase } from "react-icons/bi";
import {
  SiRubyonrails,
  SiBootstrap,
  SiNextdotjs,
} from "@icons-pack/react-simple-icons";
import { register } from "swiper/element/bundle";

const technologyIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  react: <FaReact />,
  typescript: <BiLogoTypescript />,
  firebase: <BiLogoFirebase />,
  rails: <SiRubyonrails />,
  bootstrap: <SiBootstrap />,
  nextjs: <SiNextdotjs />,
};

const projects = [
  {
    title: "To Do List",
    description:
      "A simple to do list app using React + Typecript + Redux and firebase.",
    technologies: ["html", "css", "react", "typescript", "firebase"],
    thumbnail: require("../assets/projects/todoList.png"),
    url: "https://todo-list-luchitoide.vercel.app/ ",
  },
  {
    title: "React Shop",
    description:
      "A template for a e-commerce website using React and API for products details woking on cart.",
    technologies: ["js", "css", "react"],
    thumbnail: require("../assets/projects/storeReact.png"),
    url: "https://luchitoide.github.io/tienda-react/",
  },
  {
    title: "Rails Blog",
    description:
      "A simple blog created with Ruby on Rails, allowed to create posts and comments.",
    technologies: ["rails", "js", "css", "bootstrap"],
    thumbnail: require("../assets/projects/blog.png"),
    url: "https://blogsito.onrender.com/",
  },

  {
    title: "NextJs Live Chat",
    description:
      "A live chat with image attachment created with Next.js + Typescript using Firebase for Authentication, Storage, and Hosting",
    technologies: ["nextjs", "firebase", "css", "typescript"],
    thumbnail: require("../assets/projects/chat.png"),
    url: "https://funny-chat-16bf8.firebaseapp.com/",
  },

  {
    title: "Project 5",
    description:
      "Discord Bot with NodeJs based in the Pokemon series",
    technologies: ["nextjs", "firebase", "css", "typescript"],
    thumbnail: "https://www.provincia.vicenza.it/immagini/work_in_porgress_.jpg/image",
    url: "https://funny-chat-16bf8.firebaseapp.com/",
  },

  {
    title: "Project 6",
    description:
      "thinking....",
    technologies: ["rails", "js", "css", "bootstrap"],
    thumbnail: "https://www.provincia.vicenza.it/immagini/work_in_porgress_.jpg/image",
    url: "https://blogsito.onrender.com/",
  },
  // Agrega más proyectos aquí
];

const ProjectsContainer = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  min-height: 100vh;

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
  max-width: 830px;
  padding: 40px 0;
  @media (min-width: 1800px) {
    max-width: 1245px;
  }
  @media (max-width: 850px) {
    max-width: 390px;
  }
  @media (max-width: 400px) {
    max-width: 340px;
  }
`;

const ProjectList = styled.div``;

const ProjectCard = styled.div`
  background-color: #222;
  max-width: 390px;
  height: 590px;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-wrap: balance;
  white-space: unset;
  img {
    width: 300px; /* Ajusta el tamaño de la miniatura según tus necesidades */
    height: 400px;
    border-radius: 5px;
    cursor: pointer; /* Cambio de cursor al pasar por la imagen */
  }

  h3 {
    cursor: pointer; /* Cambio de cursor al pasar por el título */
  }

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombras más pronunciadas */
  }

  @media (max-width: 400px) {
    max-width: 360px;
    height: 540px;
    img {
      width: 260px; /* Ajusta el tamaño de la miniatura según tus necesidades */
      height: 350px;
    }
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
  color: #999;
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
      injectStyles: [
        `
        :host {
          --swiper-theme-color: #ff7f50;
          
        }
        `,
      ],
      spaceBetween: 25,
      loop: true,
      grabCursor: true,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {},
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1,
          navigation: {
            enabled: false,
          },
        },
        850: {
          slidesPerView: 2,
          navigation: {
            enabled: true,
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
    <ProjectsContainer id="proyectos">
      <h2 className="text-4xl mb-4 text-center text-white">Mis Proyectos</h2>
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
                      <h3 className="text-xl mb-2 text-center text-white">
                        {project.title}
                      </h3>
                    </a>
                    <div>
                      <p className="text-white">{project.description}</p>
                      <TechnologyIcons>
                        {project.technologies.map((tech, techIndex) => (
                          <TechnologyIcon key={techIndex} title={tech}>
                            {technologyIcons[tech]}
                          </TechnologyIcon>
                        ))}
                      </TechnologyIcons>
                    </div>
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
