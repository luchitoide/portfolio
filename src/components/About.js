import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const EducationContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const VerticalLine = styled.div`
border-left: 4px solid #ff7f50;
height: 500px;
`;

const ExperienceContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #222;
  color: rgb(255 255 255);
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 0.25rem;

`;

const Entity = styled.p`
  font-size: 16px;

  margin-bottom: 0.25rem;
`;

const Date = styled.p`
  font-size: 16px;
  color:#555;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #222;
  color: rgb(255 255 255);
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Position = styled.h3`
  font-size: 18px;
  margin-bottom: 0.25rem;
`;

const Company = styled.p`
  font-size: 16px;

  margin-bottom: 0.25rem;
`;

const ExperienceDate = styled.p`
  font-size: 16px;
  color:#555;

`;

const About = () => {
  return (
    <AboutSection id="about">
      <h2 className="text-4xl mb-10 text-center text-white">Sobre Mi</h2>
      <ContentWrapper>
        <EducationContainer>
        <EducationItem>
            <Title>Curso de Desarrollo Full-Stack JavaScript</Title>
            <Entity>Platzi</Entity>
            <Date>Noviembre 2022 - Julio 2023</Date>
          </EducationItem>
          <EducationItem>
            <Title>Ingenieria Biomedica</Title>
            <Entity>Universidad del Rosario - Escuela Colombiana de Ingenieria</Entity>
            <Date> Enero 2012- Diciembre 2018</Date>
          </EducationItem>
        </EducationContainer>
        <VerticalLine />
        <ExperienceContainer>
        <ExperienceItem>
            <Position>Tutor de Programacion</Position>
            <Company>Kodland</Company>
            <ExperienceDate>abril 2023 - Actualidad</ExperienceDate>
          </ExperienceItem>
          <ExperienceItem>
            <Position>Ingeniero de Soporte It</Position>
            <Company>Serviexchange</Company>
            <ExperienceDate>abril 2021 - Actualidad</ExperienceDate>
          </ExperienceItem>
        </ExperienceContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;