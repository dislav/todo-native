import React from 'react';
import styled from 'styled-components/native';

import Header from '../components/Header/Header';
import Lists from '../components/Lists/Lists';
import Footer from '../components/Footer/Footer';

const Wrapper = styled.View`
  flex: 1;
  padding: 40px 0;
`;

const HomeScreen: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Lists />
      <Footer />
    </Wrapper>
  );
};

export default HomeScreen;
