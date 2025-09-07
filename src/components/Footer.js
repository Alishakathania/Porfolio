import React from "react";
import styled from "styled-components";
import { BodyS, Caption } from "./Typography"; // from your file above
import { FiArrowUpRight } from "react-icons/fi";
import { FaBehance, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import siteLogo from "../assets/Txt.png";
import mark from "../assets/mark.png";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.textWhite};
  padding: 80px 40px 40px;
  text-align: center;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto 60px auto;
  gap: 40px;
`;

const Left = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-family: ${({ theme }) => theme.fonts.syne};
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    span {
      color: ${({ theme }) => theme.colors.textBrand};
    }
  }

  p {
    margin-top: 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textHints};
  }

  .social {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    font-family: "Syne";
    svg {
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;

  .card {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.strokeDefault};
    border-radius: 12px;
    padding: 24px;
    flex: 1;
    min-width: 300px;
    text-align: left;

    p {
      font-size: 16px;
      margin-bottom: 30px;
      color: #fff;
      font-family: 'Syne';
    }

    a {
      font-size: 18px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textBrand};
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      font-variant-numeric: lining-nums;
    }
  }
`;

const BrandName = styled.div`
text-align: center;
 width: 100%;
 padding: 20px;
`;

const Bottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.strokeDefault};
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${BodyS} {
    color: ${({ theme }) => theme.colors.textHints};
  }

  a {
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: ${({ theme }) => theme.colors.textBrand};
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
 
      <TopSection>
        <Left>
        <img src={siteLogo} alt="logo"/>
          <div className="social">
            Based in Germany |
            <FaBehance />
            <FaLinkedinIn />
            <FaDribbble />
            <FaGithub />
          </div>
        </Left>

        <Right>
          <div className="card">
            <p>Looking for a hectic <br/> designer?</p>
            <a href="mailto:hello@henry.com">
              hello@henry.com <FiArrowUpRight />
            </a>
          </div>

          <div className="card">
            <p>Want a more in-depth look at <br/>  my history?</p>
            <a href="tel:+5986879874">
              +598 6879 9874 <FiArrowUpRight />
            </a>
          </div>
        </Right>
      </TopSection>

      {/* Brand */}
      <BrandName>
      <img src={mark} alt="mark henry"/>
      </BrandName>

      {/* Bottom */}
      <Bottom>
        <BodyS>©2023 Mark Henry, All Rights Reserved</BodyS>
        <a href="#top">
          Back to Top <FiArrowUpRight />
        </a>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;
