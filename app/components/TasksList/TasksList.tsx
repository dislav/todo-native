import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { Container, Text } from './TasksList.styled';
import TaskItem from '../TaskItem/TaskItem';

const mapStateToProps = ({ todo }: RootState) => ({ tasks: todo.tasks });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITasksList {
  listId?: number;
  favorite?: boolean;
}

const TasksList: React.FC<ITasksList & PropsFromRedux> = ({ listId, tasks, favorite }) => {
  if (favorite) {
    const favoriteTasks = tasks.filter(({ favorite }) => favorite);

    return (
      <Container>
        {favoriteTasks.length > 0 ? (
          favoriteTasks.map((task, index) => <TaskItem key={index} {...task} />)
        ) : (
          <Text>Список пуст</Text>
        )}
      </Container>
    );
  }

  if (listId) {
    const filterTasks = tasks.filter(({ listId: id }) => id === listId);

    return (
      <Container>
        {filterTasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </Container>
    );
  }

  return (
    <Container>
      {tasks.length > 0 ? (
        tasks.map((task, index) => <TaskItem key={index} {...task} />)
      ) : (
        <Text>Список пуст</Text>
      )}
    </Container>
  );
};

export default connector(TasksList);
