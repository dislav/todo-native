import React from 'react';
import styled from 'styled-components/native';
import BackButton from '../components/BackButton/BackButton';
import AchievementsList from '../components/AchievementsList/AchievementsList';

const Container = styled.View`
  flex: 1;
  padding: 40px 0;
`;

const AchievementsScreen = () => {
  return (
    <Container>
      <BackButton url={'/'} />
      <AchievementsList />
    </Container>
  );
};

export default AchievementsScreen;
