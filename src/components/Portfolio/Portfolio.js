import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #c5c6c9;
  margin-bottom: 10px;

  // Stilovi za mobilne uređaje
  @media (max-width: 768px) {
    font-size: 14px;
  }

  // Stilovi za tablete
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;

const Link = styled.a`
  color: #0077cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #c5c6c9;
  padding-bottom: 10px;
  margin-bottom: 20px;

  // Stilovi za mobilne uređaje
  @media (max-width: 768px) {
    font-size: 20px;
  }

  // Stilovi za tablete
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;

const Portfolio = ({ portfolio }) => {
  return (
    <section>
      <Title>Portfolio</Title>
      <List>
        {portfolio.map((link, index) => (
          <ListItem key={index}>
            <Link href={link} target='_blank'>
              {link}
            </Link>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Portfolio;
