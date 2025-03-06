import React from 'react';
import styled from 'styled-components';
import * as Icons from '../Icons'; // Učitava sve ikonice

const Section = styled.section``;

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

const Text = styled.p`
  font-size: 16px;
  color: #c5c6c9;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #0077cc;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const EducationContainer = styled.div`
  padding: 20px;
`;

const DegreeTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0.1px solid #c5c6c9;
  color: #c5c6c9;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  svg {
    width: 20px;
    height: 20px;
    fill: #c5c6c9;
  }
`;

// Mapa sa ikonama tehnologija
const skillIcons = {
  HTML5: Icons.Html5,
  CSS3: Icons.Css,
  'Vanilla JS (ES5, ES6)': Icons.Javascript,
};

const Education = ({ education }) => {
  return (
    <Section>
      <Title>Education</Title>
      {education.map((edu, index) => (
        <EducationContainer key={index}>
          <DegreeTitle>{edu.degree || edu.course}</DegreeTitle>
          <Text>
            <strong>Institution:</strong> {edu.institution}
          </Text>
          {edu.graduation_year && (
            <Text>
              <strong>Graduation Year:</strong> {edu.graduation_year}
            </Text>
          )}
          {edu.duration && (
            <Text>
              <strong>Duration:</strong> {edu.duration}
            </Text>
          )}
          {edu.final_project && (
            <div>
              <Text>
                <strong>Final Project:</strong>{' '}
                <Link href={edu.final_project.github_link} target='_blank'>
                  {edu.final_project.name}
                </Link>
                {' - '}
                {edu.final_project.description}
              </Text>
              {/* Prikaz čipova za tehnologije */}
              <ChipContainer>
                {edu.final_project.technologies.map((tech, i) => {
                  const IconComponent = skillIcons[tech];
                  return (
                    <Chip key={i}>
                      {IconComponent && <IconComponent />}
                      {tech}
                    </Chip>
                  );
                })}
              </ChipContainer>
            </div>
          )}
        </EducationContainer>
      ))}
    </Section>
  );
};

export default Education;
