import React, { useState } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa"; // Importa iconos para los temas

const StyledNavbar = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7f50; /* Cambia el color al pasar el cursor */
  }
  @media (max-width: 665px) {
    display:none;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  margin-left:50px;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7f50; /* Cambia el color al pasar el cursor */
  }
`;

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Aquí puedes agregar la lógica para cambiar el tema (clase de CSS, contexto, etc.).
  };

  return (
    <StyledNavbar>
      <Logo>Portfolio</Logo>
      <div className="flex">
        <NavLinks>
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#sobre-mi">Sobre Mí</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#habilidades">Habilidades</NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </div>
    </StyledNavbar>
  );
};

export default Header;
