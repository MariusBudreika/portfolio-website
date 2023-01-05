import About from 'components/About/About';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import Skills from 'components/Skills';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <About />
        <Skills />
      </PageContainer>
    </div>
  );
};

export default App;
