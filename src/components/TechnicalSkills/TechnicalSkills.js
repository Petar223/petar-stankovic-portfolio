import React from 'react';
import styled from 'styled-components';
import * as Icons from '../Icons'; // Učitava sve ikonice

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #c5c6c9;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  svg {
    width: 50px;
    height: 50px;
    fill: #c5c6c9;
    transition: fill 0.2s ease-in-out;
  }
`;

// Tooltip za prikaz naziva tehnologije
const Tooltip = styled.span`
  position: absolute;
  bottom: -30px;
  background: #c5c6c9;
  color: rgba(4, 3, 54);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const skillIcons = {
  JavaScript: Icons.Javascript,
  TypeScript: Icons.Typescript,
  HTML: Icons.Html5,
  CSS: Icons.Css,
  Angular: Icons.Angular,
  React: Icons.React,
  'Redux-Saga': Icons.Reduxsaga,
  Cypress: Icons.Cypress,
  JSON: Icons.Json,
  Git: Icons.Github,
  Jira: Icons.Jira,
  Tailwind: Icons.Tailwindcss,
  Docker: Icons.Docker,
  Sass: Icons.Sass,
  Webpack: Icons.Webpack,
  'styled-components': Icons.Styledcomponents,
  MongoDB: Icons.Mongodb,
  Axios: Icons.Axios,
};

const TechnicalSkills = ({ skills }) => {
  return (
    <Section>
      <Title>Technical Skills</Title>
      <IconContainer>
        {skills.map((skill, index) => {
          const IconComponent = skillIcons[skill];
          return (
            <IconWrapper key={index}>
              <Tooltip>{skill}</Tooltip>
              {IconComponent && <IconComponent />}
            </IconWrapper>
          );
        })}
      </IconContainer>
    </Section>
  );
};

export default TechnicalSkills;
