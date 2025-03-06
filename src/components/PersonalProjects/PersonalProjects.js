import React from 'react';
import styled from 'styled-components';
import * as Icons from '../Icons'; // Učitava sve ikonice

const Section = styled.section`
  margin-bottom: 40px;
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

const ProjectContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const ProjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #c5c6c9;
  line-height: 1.6;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #c5c6c9;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
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

const Link = styled.a`
  color: #0077cc;
  margin: 0 0 10px 10px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const skillIcons = {
  JavaScript: Icons.Javascript,
  TypeScript: Icons.Typescript,
  HTML: Icons.Html5,
  CSS: Icons.Css,
  Angular: Icons.Angular,
  'React.js': Icons.React,
  'Redux-Saga': Icons.Reduxsaga,
  Cypress: Icons.Cypress,
  JSON: Icons.Json,
  Git: Icons.Github,
  Jira: Icons.Jira,
  Docker: Icons.Docker,
  Sass: Icons.Sass,
  Webpack: Icons.Webpack,
  'styled-components': Icons.Styledcomponents,
  'GitHub Actions': Icons.Githubactions,
  MongoDB: Icons.Mongodb,
  'Node.js': Icons.Nodedotjs,
  Tailwind: Icons.Tailwindcss,
  Axios: Icons.Axios,
  'Amazon EC2': Icons.Amazonec2,
};

const PersonalProjects = ({ projects }) => {
  return (
    <Section>
      <Title>Personal Projects</Title>
      {projects.map((project, index) => (
        <ProjectContainer key={index}>
          <ProjectTitleContainer>
            <ProjectTitle>
              {project.name} {project.duration && `(${project.duration})`}
            </ProjectTitle>
            {project.name === 'Dokko filler' && (
              <Link
                href='https://master.d3b4iv7p0rq0yz.amplifyapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Web App
              </Link>
            )}
          </ProjectTitleContainer>
          {project.description && <Text>{project.description}</Text>}
          <ChipContainer>
            {project.technologies.map((tech, i) => {
              const IconComponent = skillIcons[tech];
              return (
                <Chip key={i}>
                  {IconComponent && <IconComponent />}
                  {tech}
                </Chip>
              );
            })}
          </ChipContainer>
          {project.responsibilities && (
            <List>
              {project.responsibilities.map((resp, i) => (
                <ListItem key={i}>{resp}</ListItem>
              ))}
            </List>
          )}
        </ProjectContainer>
      ))}
    </Section>
  );
};

export default PersonalProjects;
