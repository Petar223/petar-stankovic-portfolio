import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Title from '../../UIcomponents/Title';
import SkeletonProject from '../../UIcomponents/SkeletonProject';

// const simulateDelay = (ms) => new Promise((res) => setTimeout(res, ms));
const ProjectsList = lazy(() => import('../ProjectList/ProjectList'));

const Section = styled.section`
  margin-bottom: 40px;
`;

const PersonalProjects = ({ projects }) => {
  return (
    <Section>
      <Title>Personal Projects</Title>
      <Suspense fallback={<SkeletonProject count={3} />}>
        <ProjectsList
          data={projects}
          title='Personal Projects'
          showLink={true}
        />
      </Suspense>
    </Section>
  );
};

export default PersonalProjects;
