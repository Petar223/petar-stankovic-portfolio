import React from 'react';
import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import Text from '../../UIcomponents/Text';
import Link from '../../UIcomponents/Link';
import Chip from '../../UIcomponents/Chip';
import ChipContainer from '../../UIcomponents/ChipContainer';
import SubTitle from '../../UIcomponents/SubTitle';
import { skillIcons } from '../constants/constants';

const Section = styled.section``;

const EducationContainer = styled.div`
  padding: 20px;
`;

const Education = ({ education }) => {
  return (
    <Section>
      <Title>Education</Title>
      {education.map((edu, index) => (
        <EducationContainer key={index}>
          <SubTitle>{edu.degree || edu.course}</SubTitle>
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
