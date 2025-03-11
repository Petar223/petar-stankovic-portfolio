import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppContainer from '../../UIcomponents/AppContainer';
import Button from '../../UIcomponents/Button';
import { useNavigate } from 'react-router-dom';
import ThreeHorizontalLinesIcon from '../Icons/ThreeHorizontalLinesIcon';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  backdrop-filter: blur(5px);
  transition: box-shadow 0.3s ease-in-out;
  z-index: 1000;
  background: transparent;

  ${(props) =>
    props.scrolled &&
    `
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 10px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
    }
    transition: box-shadow 0.5s ease-in-out;
    backdrop-filter: blur(15px);
  `}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 800px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: gray;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 999;

  @media (min-width: 801px) {
    display: none;
  }
`;

const LayoutContainer = styled.div`
  padding-top: 60px;
`;

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled}>
        <NavLinks>
          <Button onClick={() => navigate('/')}>Home</Button>
          <Button onClick={() => navigate('/about')}>About Me</Button>
          <Button onClick={() => navigate('/career')}>Career Page</Button>
        </NavLinks>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <ThreeHorizontalLinesIcon />
        </MenuIcon>
      </Header>
      {menuOpen && ( // Renderuj MobileMenu samo ako je menuOpen true
        <MobileMenu open={menuOpen}>
          <Button
            onClick={() => {
              navigate('/');
              setMenuOpen(false);
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              navigate('/about');
              setMenuOpen(false);
            }}
          >
            About Me
          </Button>
          <Button
            onClick={() => {
              navigate('/career');
              setMenuOpen(false);
            }}
          >
            Career Page
          </Button>
        </MobileMenu>
      )}
      <AppContainer>
        <LayoutContainer>{children}</LayoutContainer>
      </AppContainer>
    </>
  );
}

export default Layout;
