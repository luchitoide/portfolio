import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  height: 100px;
  @media (max-width: 665px) {
    padding: 1rem;
    height: 80px;
  }
`;

const AnimatedTitle = styled.h1`
  font-size: 3rem;
  animation: bounce 1.5s ease infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @media (max-width: 665px) {
    font-size: 2rem; 
  }
  @media (max-width: 400px) {
    font-size: 1.7rem; 
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <AnimatedTitle>¡Bienvenido a mi Portafolio!</AnimatedTitle>
    </StyledHeader>
  );
};

export default Header;