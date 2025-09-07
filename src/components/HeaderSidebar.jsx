// HeaderSidebar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { FiX, FiMenu } from "react-icons/fi";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/main-logo.png";


const HeaderWrapper = styled.header`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
 
  img {
    width: auto;
    height: 28px;
    margin-right: 8px;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TalkBtn = styled.a`
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #080808;
  cursor: pointer;
`;

const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  background: #080808;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 320px;
  height: 100%;
  background: #0c0c0c;
  color: #fff;
  transition: right 0.3s ease-in-out;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f7a531;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const NavLinks = styled.ul`
  margin-top: 100px;
  padding: 0 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    font-family: "Syne", sans-serif;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

    svg {
      font-size: 18px;
    }
  }
`;

const SidebarFooter = styled.div`
  padding: 20px 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 20px;
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

const HeaderSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img src={logo} alt="logo" />
           
        </Logo>
        <RightControls>
          <TalkBtn href="#">
            Let’s Talk <FiArrowUpRight />
          </TalkBtn>
          <MenuButton onClick={() => setOpen(true)}>
            <FiMenu />
          </MenuButton>
        </RightControls>
      </HeaderWrapper>

      <SidebarWrapper open={open}>
        <CloseBtn onClick={() => setOpen(false)}>
          <FiX />
        </CloseBtn>

        <NavLinks>
          <li>
            <a href="#home">
              Home <FiArrowUpRight />
            </a>
          </li>
          <li>
            <a href="#about">
              About <FiArrowUpRight />
            </a>
          </li>
          <li>
            <a href="#projects">
              Project <FiArrowUpRight />
            </a>
          </li>
          <li>
            <a href="#blog">
              Blog <FiArrowUpRight />
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact <FiArrowUpRight />
            </a>
          </li>
        </NavLinks>

        <SidebarFooter>
          <FaBehance />
          <FaLinkedinIn />
          <FaGithub />
        </SidebarFooter>
      </SidebarWrapper>
    </>
  );
};

export default HeaderSidebar;
