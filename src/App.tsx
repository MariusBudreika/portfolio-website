import About from 'components/About/About';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <About />
      </PageContainer>
    </div>
  );
};

export default App;
