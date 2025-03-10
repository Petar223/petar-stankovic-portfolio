import React from 'react';
import styled from 'styled-components';
import Text from '../../UIcomponents/Text';
import Link from '../../UIcomponents/Link';
import Chip from '../../UIcomponents/Chip';
import ChipContainer from '../../UIcomponents/ChipContainer';
import SubTitle from '../../UIcomponents/SubTitle';
import { skillIcons } from '../constants/constants';
import { OpenExternalLinkIcon } from '../Icons';

const Section = styled.section``;

const Container = styled.div`
  padding: 20px;
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

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const CompanyTitle = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;

const ProjectContainer = styled.div`
  padding: 20px 0 0 0;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Duration = styled.span`
  font-size: 14px;
`;

const StyledIcon = styled(OpenExternalLinkIcon)`
  width: 16px;
  height: 16px;
  fill: #ffffff;
  transition: transform 1s ease-in-out;

  &:hover {
    fill: #4a90e2;
  }
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
            <CompanyHeader>
              <CompanyTitle>
                {item.company} - {item.location}
              </CompanyTitle>
              <Duration>{item.duration}</Duration>
            </CompanyHeader>
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
              <ProjectHeader>
                <SubTitle>
                  {project.name}
                  {showLink && project.link && (
                    <Link
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <StyledIcon />
                    </Link>
                  )}
                </SubTitle>
                {project.duration && <Duration>{project.duration}</Duration>}
              </ProjectHeader>

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
