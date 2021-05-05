import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container, Input, Button } from './TaskForm.styled';
import { addTaskRequest } from '../../store/todo/actions';

const mapDispatchToProps = {
  addTaskRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITaskForm {
  listId: number;
}

const TaskForm: React.FC<ITaskForm & PropsFromRedux> = ({ listId, addTaskRequest }) => {
  const [task, setTask] = useState('');

  const onSubmit = () => {
    addTaskRequest({
      id: Date.now(),
      listId,
      text: task,
      completed: false,
      favorite: false,
    });
  };

  return (
    <Container>
      <Input value={task} onChangeText={setTask} placeholder={'Добавить задачу'} />
      <Button title="Добавить" onPress={onSubmit} />
    </Container>
  );
};

export default connector(TaskForm);
