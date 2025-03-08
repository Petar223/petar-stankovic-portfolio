import React from 'react';
import styled from 'styled-components';
import Text from '../../UIcomponents/Text';
import Link from '../../UIcomponents/Link';
import Chip from '../../UIcomponents/Chip';
import ChipContainer from '../../UIcomponents/ChipContainer';
import SubTitle from '../../UIcomponents/SubTitle';
import { skillIcons } from '../constants/constants';

const Section = styled.section``;

const Container = styled.div`
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  list-style: none;
  position: relative;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #c5c6c9;
  padding-bottom: 20px;
  position: relative;
  padding-left: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 3px;
    width: 10px;
    height: 10px;
    background-color: #c5c6c9;
    border-radius: 50%;
    z-index: 1;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 14px;
    top: 13px;
    height: calc(100% - 10px);
    width: 1px;
    background-color: #c5c6c9;
    z-index: 0;
  }
`;

const CompanyTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffffff;
`;

const ProjectContainer = styled.div`
  padding: 20px 0 0 0;
`;

function ProjectsList({
  data,
  showCompany = false,
  showRoles = false,
  showLink = false,
}) {
  return (
    <Section>
      {data.map((item, index) => (
        <Container key={index}>
          {showCompany && (
            <CompanyTitle>
              {item.company} - {item.location} ({item.duration})
            </CompanyTitle>
          )}

          {showRoles &&
            item.roles &&
            item.roles.map((role, idx) => (
              <Text key={idx}>
                <strong>{role.title}:</strong> {role.start_date} -{' '}
                {role.end_date}
              </Text>
            ))}

          {item.projects.map((project, idx) => (
            <ProjectContainer key={idx}>
              <TitleContainer>
                <SubTitle>
                  {project.name} {project.duration && `(${project.duration})`}
                </SubTitle>
                {showLink && project.link && (
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Web App
                  </Link>
                )}
              </TitleContainer>

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
        </Container>
      ))}
    </Section>
  );
}

export default ProjectsList;
