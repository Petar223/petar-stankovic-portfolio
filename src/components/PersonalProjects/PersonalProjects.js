import React from 'react';
import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import ProjectsList from '../ProjectList/ProjectList';

const Section = styled.section`
  margin-bottom: 40px;
`;

const PersonalProjects = ({ projects }) => {
  return (
    <Section>
      <Title>Personal Projects</Title>
      <ProjectsList data={projects} title='Personal Projects' showLink={true} />
    </Section>
  );
};

export default PersonalProjects;
