import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import HeaderSidebar from "./HeaderSidebar";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  flex: 1;
  height: 100%;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <MainContent>
      <HeaderSidebar />
      <ContentArea>{children}</ContentArea>
      <Footer />
    </MainContent>
  </Wrapper>
);

export default Layout;
