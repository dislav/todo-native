import React from 'react';
import styled from 'styled-components/native';
import TasksList from '../components/TasksList/TasksList';
import BackButton from '../components/BackButton/BackButton';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const TasksScreen = () => {
  return (
    <Container>
      <BackButton url={'/'} />
      <TasksList />
    </Container>
  );
};

export default TasksScreen;
