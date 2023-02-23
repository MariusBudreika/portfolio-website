import About from 'components/About/About';
import ContactMe from 'components/ContactMe';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import React from 'react';

const App: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </PageContainer>
  );
};

export default App;
