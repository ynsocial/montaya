```tsx
import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import MagicCursor from './MagicCursor';

interface LayoutProps {
  children: ReactNode;
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  &.loaded {
    opacity: 1;
  }
`;

const ContentScroll = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Preloader />
      <MagicCursor />
      <Header />
      <ContentScroll id="content-scroll">
        {children}
      </ContentScroll>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
```