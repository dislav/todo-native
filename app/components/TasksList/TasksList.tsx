import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { Wrapper } from './TasksList.styled';
import TaskItem from '../TaskItem/TaskItem';

const mapStateToProps = ({ todo }: RootState) => ({ tasks: todo.tasks });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITasksList {
  listId?: number;
}

const TasksList: React.FC<ITasksList & PropsFromRedux> = ({ listId, tasks }) => {
  const filterTasks = tasks.filter(({ listId: id }) => id === listId);

  return (
    <Wrapper>
      {filterTasks.map((task, index) => (
        <TaskItem key={index} {...task} />
      ))}
    </Wrapper>
  );
};

export default connector(TasksList);
