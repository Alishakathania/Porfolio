import React, { useState } from "react";
import styled from "styled-components";
import right from "../assets/Img.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";
import icon5 from "../assets/Icon5.png";
import icon6 from "../assets/Icon6.png";
import right3 from "../assets/about.png";
import {
  Body,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
} from "../components/Typography";
import Button from "../styles/Button";
import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 4rem 2rem;
  background-color: #ffe9d9;
`;
const LeftSection = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #ffe9d9;
  .button-div {
    display: flex;
    gap: 30px;
  }
  .social {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #000;
    margin-top: 20px;
    font-family: "Syne";
    svg {
      font-size: 18px;
      cursor: pointer;
    }
  }
`;
const RightSection = styled.div`
  img {
    width: 100%;
  }
`;
const Span = styled.span`
  font-weight: 700;
  font-style: Bold;
  font-size: 44px;
  line-height: 54px;
  letter-spacing: 0px;
  font-variant-numeric: lining-nums;
`;

const Highlight = styled.span`
  position: relative;
  display: inline-block;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 17px;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.bgBrand};
    border-radius: 50%;
    z-index: -1;
  }
`;
const Section = styled.section`
  padding: 6rem;
  background: ${(props) => props.bg || "#fff"};

  .service-main-card {
    display: grid;
    grid-template-columns: 2fr 1fr; /* left grid + right card */
    gap: 40px;
    align-items: stretch;
  }
`;

const SectionTitle = styled.h3`
  font-size: 64px;
  display: flex;
  font-weight: 700;
  font-family: "Syne";
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
  .min-title {
    display: flex;
    flex-direction: column;
  }
  h6 {
    color: #ff9330;
  }
  p {
    width: 50%;
    color: #08080899;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 columns */
  grid-template-rows: repeat(3, auto); /* 3 rows */
  gap: 20px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 15px;
  font-family: "Syne";
  cursor: pointer;
  min-height: 200px;
  height: 100%;
  transition: 0.3s;
  &:hover {
    background: #fff;
    box-shadow: 0px 36px 100px 0px #08080826;
  }

  .card-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
    background-color: #fff;
    padding: 5px;
    border-radius: 50%;
  }
`;

const SayHelloCard = styled.div`
  background: #000;
  color: #fff;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .arrow {
    font-size: 68px;
    align-self: flex-end;
    color: #fbb040;
  }

  .text {
    margin-top: auto;
    p {
      font-size: 14px;
      color: #fbb040;
      margin: 0 0 10px;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: #fff;
    }
  }
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;
  padding: 4rem 6rem;
`;

const ResumeLeft = styled.div`
  h5 {
    color: #f97316;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavButton = styled.button`
  background: #fff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &.active {
    background: black;
    color: white;
  }
`;

const ResumeDetails = styled.div`
  max-width: 500px;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1rem;

    span {
      font-weight: 600;
      color: #555;
      min-width: 120px;
    }

    b,
    strong {
      font-weight: 700;
    }
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const PortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  background: #d9d9d9;
  height: 250px;
  border-radius: 16px;
  margin-bottom: 1rem;
`;

const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    border: 1px solid #aaa;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  span {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ViewAllBtn = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  max-width: 600px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem 8rem;
  gap: 4rem;
`;

const RightSections = styled.div`
  position: relative;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
  }
`;

const LeftSections = styled.div`
  button {
    width: 255px;
  }
  h5 {
    color: #f97316;
    font-weight: 600;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 1rem 0;
    line-height: 1.2;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 2rem;
    color: #555;
    line-height: 1.6;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-size: 1.5rem;
      font-weight: 700;
    }

    span {
      font-size: 0.9rem;
      color: #666;
    }
  }
`;

const Buttons = styled.div`
  .primary {
    background: black;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  margin-top: 2rem;

  svg {
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    color: #f97316;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 10px;
`;
const Home = () => {
  const [activeTab, setActiveTab] = useState("about");
   const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
            <h3>Product Designer</h3>
            <p>
              Mark Henry, <b>Product Designer</b>, based in Germany. A lover of
              words, a wrangler of copy, here to create copy that not only
              reflects who you are and what you stand for but truly lands with
              those that read them.
            </p>
            <DetailList>
              <li><span>Name</span> Mark Henry</li>
              <li><span>Nationality</span> Germany</li>
              <li><span>Phone</span> +(2) 870 174 302</li>
              <li><span>Email</span> hello@henry.com</li>
              <li><span>Experience</span> 12+ years</li>
              <li><span>Freelance</span> Available</li>
              <li><span>Skype</span> henry.halk23</li>
              <li><span>Language</span> German, English</li>
            </DetailList>
          </>
        );
      case "experience":
        return (
          <>
            <H5>Experience</H5>
            <Cards>
              <Card>
                <small>03/2018 - Running</small>
                <p><b>Lead digital marketer</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>JavaScript Developer</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>Product Designer</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>UX Researcher</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
            </Cards>
          </>
        );
      case "education":
        return (
          <>
            <H5>Education</H5>
            <Cards>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>BA Business Management</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>BA Business Management</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
              <Card>
                <small>03/2008 - 07/2011</small>
                <p><b>BA Business Management</b></p>
                <span>@ Axtra Inc.</span>
              </Card>
            </Cards>
          </>
        );
      case "skills":
        return (
          <>
            <H5>Skills</H5>
            <Cards>
              <Card>React.js / Next.js</Card>
              <Card>Node.js / Express</Card>
              <Card>MongoDB / SQL</Card>
              <Card>UI/UX Design</Card>
            </Cards>
          </>
        );
      case "awards":
        return (
          <>
            <H5>Awards</H5>
            <Cards>
              <Card>Best Designer 2020 - German Design Awards</Card>
              <Card>Top Developer 2021 - Tech Expo</Card>
            </Cards>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Hero>
        <LeftSection>
          <H5>Hello, I’m✌</H5>
          <H1>
            {" "}
            <Highlight>Mark</Highlight> Henry
          </H1>
          <H6>Product Designer | Based in Germany</H6>
          <div className="button-div">
            <Button title="Let’s Talk" variant="primary" />
            <Button title="My Work" variant="secondary" />
          </div>

          <div className="social">
            <Span>1.2k+</Span>
            Worldwide client |
            <FaBehance />
            <FaLinkedinIn />
            <FaDribbble />
            <FaGithub />
          </div>
        </LeftSection>
        <RightSection>
          <img src={right} alt="side" />
        </RightSection>
      </Hero>

      <Section>
        <SectionTitle>
          <div className="min-title">
            <H6>services</H6>
            <Highlight>My specialties </Highlight>
          </div>
          <Body>
            Synergistically seize front-end methods of empowerment without
            extensive core competencies. Progressively repurpose alternative
            platforms
          </Body>
        </SectionTitle>
        <div className="service-main-card">
          {/* left grid of 6 cards */}
          <ServicesGrid>
            <ServiceCard>
              <img src={icon1} alt="icon" />
              <div className="card-div">
                <Subtitle1>Mobile Apps design</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
            <ServiceCard>
              <img src={icon2} alt="icon" />
              <div className="card-div">
                <Subtitle1>UI/UX design</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
            <ServiceCard>
              <img src={icon3} alt="icon" />
              <div className="card-div">
                <Subtitle1>Website design</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
            <ServiceCard>
              <img src={icon4} alt="icon" />
              <div className="card-div">
                <Subtitle1>Webflow development</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
            <ServiceCard>
              <img src={icon5} alt="icon" />
              <div className="card-div">
                <Subtitle1>Brand identity</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
            <ServiceCard>
              <img src={icon6} alt="icon" />
              <div className="card-div">
                <Subtitle1>Interaction design</Subtitle1>
                <MdArrowOutward />
              </div>
            </ServiceCard>
          </ServicesGrid>

          {/* right side black card */}
          <SayHelloCard>
            <MdArrowOutward className="arrow" />
            <div className="text">
              <p>SAY HELLO!</p>
              <h3>hello@henry.com</h3>
            </div>
          </SayHelloCard>
        </div>
      </Section>

      <Wrapper>
        <RightSections>
          <img src={right3} alt="side" />
        </RightSections>

        <LeftSections>
          <Subtitle1>Hello I’m</Subtitle1>
          <H3>
            <Highlight>
              Mark Henry, <br /> Product Designer
            </Highlight>
          </H3>
          <H4>Based in Germany</H4>

          <Body>
            That is where I come in. A lover of words, a wrangler of copy. Here
            to create copy that not only reflects who you are and what you stand
            for, but words that truly land with those that read them, calling
            your audience in and making them.
          </Body>

          <Stats>
            <div>
              <strong>08</strong>
              <span>Award winner</span>
            </div>
            <div>
              <strong>1.2k</strong>
              <span>Worldwide client</span>
            </div>
            <div>
              <strong>3.5k</strong>
              <span>Job done successfully</span>
            </div>
          </Stats>

          <Buttons>
            <Button title="Download my resume" variant="primary" />
          </Buttons>

          <Social>
            <FaBehance />
            <FaLinkedinIn />
            <FaDribbble />
            <FaGithub />
          </Social>
        </LeftSections>
      </Wrapper>

      {/* RESUME */}
      <Section bg="#fff7f0">
        <ResumeGrid>
          {/* LEFT SIDE */}
          <ResumeLeft>
            <h5>Resume</h5>
            <h2>
              <Highlight> All over my details find here…</Highlight>
            </h2>

           <NavButtons>
            <NavButton
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About me ↗
            </NavButton>
            <NavButton
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Experience ↗
            </NavButton>
            <NavButton
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education ↗
            </NavButton>
            <NavButton
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills ↗
            </NavButton>
            <NavButton
              className={activeTab === "awards" ? "active" : ""}
              onClick={() => setActiveTab("awards")}
            >
              Awards ↗
            </NavButton>
          </NavButtons>
          </ResumeLeft>

          {/* RIGHT SIDE */}
          <ResumeDetails>{renderContent()}</ResumeDetails>
        </ResumeGrid>
      </Section>

      {/* PORTFOLIO */}
      <Section bg="#fdeee0">
        <H6>Portfolio</H6>
        <SectionTitle>
          <Highlight>My recentwork</Highlight>
        </SectionTitle>

        <PortfolioGrid>
          <PortfolioCard>
            <CardImage />
            <CardTags>
              <span>APP</span>
              <span>DEVELOPMENT</span>
            </CardTags>
            <CardFooter>
              <h4>Basinik Finance App</h4>
            </CardFooter>
          </PortfolioCard>

          <PortfolioCard>
            <CardImage />
            <CardTags>
              <span>APP</span>
              <span>DEVELOPMENT</span>
            </CardTags>
            <CardFooter>
              <h4>Oxilex Dashboard design</h4>
              <span>↗</span>
            </CardFooter>
          </PortfolioCard>
        </PortfolioGrid>

        <ViewAllBtn>View All Project ↗</ViewAllBtn>
      </Section>
    </>
  );
};

export default Home;
