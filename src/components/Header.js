import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa"; // Importa iconos para los temas

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  height: 80px;
  @media (max-width: 665px) {
    height: 60px;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  font-size: 1.1rem;
  color: ${(props) =>
    props.isActive ? "#ff7f50" : props.isDarkTheme ? "white" : "black"};
  text-decoration: ${(props) =>
    props.isActive ? "underline" : "none"};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7f50;
  }
  @media (max-width: 665px) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  margin-left: 50px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7f50; /* Cambia el color al pasar el cursor */
  }
`;

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "proyectos", "about"]; // Agrega las IDs de tus secciones aquí
      const scrollPosition = window.scrollY;

      // Itera a través de las secciones y verifica cuál está en la parte superior de la ventana
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Aquí puedes agregar la lógica para cambiar el tema (clase de CSS, contexto, etc.).
    if (!isDarkTheme) {
      document.documentElement.style.setProperty("--background-color", "#fff");
      document.documentElement.style.setProperty("--background-color-alt", "#aaa");
      document.documentElement.style.setProperty("--text-color", "#333");
      document.documentElement.style.setProperty("--project-color", "#ccc");
    } else {
      document.documentElement.style.setProperty("--background-color", "#333");
      document.documentElement.style.setProperty("--background-color-alt", "#444");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--project-color", "#222");
    }
  };

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledNavbar>
      <Logo>Portafolio</Logo>
      <div className="flex">
        <NavLinks>
          <NavLink
            isActive={activeSection === "inicio"}
            onClick={() => handleNavLinkClick("inicio")}
            isDarkTheme={!isDarkTheme}
          >
            Inicio
          </NavLink>
          <NavLink
            isActive={activeSection === "about"}
            onClick={() => handleNavLinkClick("about")}
            isDarkTheme={!isDarkTheme}
          >
            Sobre mi
          </NavLink>
          <NavLink
            isActive={activeSection === "proyectos"}
            onClick={() => handleNavLinkClick("proyectos")}
            isDarkTheme={!isDarkTheme}
          >
            Proyectos
          </NavLink>
          {/* Agrega más enlaces aquí */}
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </div>
    </StyledNavbar>
  );
};

export default Header;