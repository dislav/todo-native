import React from 'react';
import styled from 'styled-components/native';
import TasksList from '../components/TasksList/TasksList';
import BackButton from '../components/BackButton/BackButton';

const Container = styled.View`
  flex: 1;
  padding: 40px 0;
`;

const FavoritesScreen = () => {
  return (
    <Container>
      <BackButton url={'/'} />
      <TasksList favorite />
    </Container>
  );
};

export default FavoritesScreen;
