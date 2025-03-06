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

const ExperienceContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CompanyTitle = styled.h3`
  font-size: 20px;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

const ProjectContainer = styled.div`
  margin: 25px 0 25px 0;
`;

const ProjectTitle = styled.h4`
  font-size: 18px;
  color: #f1f1f1;
  margin-bottom: 8px;
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
  margin: 15px 0 15px 0;
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

  svg {
    width: 20px;
    height: 20px;
    fill: #c5c6c9;
  }
`;

const skillIcons = {
  JavaScript: Icons.Javascript,
  TypeScript: Icons.Typescript,
  HTML: Icons.Html5,
  CSS: Icons.Css,
  Angular: Icons.Angular,
  'Angular 10+': Icons.Angular,
  'Angular 15': Icons.Angular,
  'Angular 4': Icons.Angular,
  'React.js': Icons.React,
  'Redux-saga': Icons.Reduxsaga,
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
  Chai: Icons.Chai,
};

const ProfessionalExperience = ({ experience }) => {
  return (
    <Section>
      <Title>Professional Experience</Title>
      {experience.map((exp, index) => (
        <ExperienceContainer key={index}>
          <CompanyTitle>
            {exp.company} - {exp.location} ({exp.duration})
          </CompanyTitle>
          {exp.roles.map((role, idx) => (
            <Text key={idx}>
              <strong>{role.title}:</strong> {role.start_date} - {role.end_date}
            </Text>
          ))}
          {exp.projects.map((project, idx) => (
            <ProjectContainer key={idx}>
              <ProjectTitle>
                {project.name} ({project.duration})
              </ProjectTitle>
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
        </ExperienceContainer>
      ))}
    </Section>
  );
};

export default ProfessionalExperience;
