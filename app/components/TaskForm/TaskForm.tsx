import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Path } from 'react-native-svg';
import {
  Container,
  Button,
  Input,
  Modal,
  ModalWrapper,
  ModalText,
  ModalFooter,
  ModalButtonText,
  Text,
  Icon,
  CreateButton,
} from './TaskForm.styled';
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
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = () => {
    addTaskRequest({
      id: Date.now(),
      listId,
      text: task,
      completed: false,
      favorite: false,
    });
    setTask('');
    setIsOpen(false);
  };

  return (
    <Container>
      <CreateButton onPress={() => setIsOpen(true)}>
        <Icon viewBox="0 0 448 512">
          <Path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          />
        </Icon>
        <Text>Добавить задачу</Text>
      </CreateButton>
      <Modal animationType={'slide'} transparent={true} visible={isOpen}>
        <ModalWrapper>
          <ModalText>Добавление задачи</ModalText>
          <Input
            value={task}
            onChangeText={setTask}
            placeholder={'Введите задачу'}
            multiline={true}
          />
          <ModalFooter>
            <Button
              onPress={() => {
                setIsOpen(false);
                setTask('');
              }}
              style={{ marginRight: 20 }}
            >
              <ModalButtonText>Отмена</ModalButtonText>
            </Button>
            <Button onPress={onSubmit}>
              <ModalButtonText>Ок</ModalButtonText>
            </Button>
          </ModalFooter>
        </ModalWrapper>
      </Modal>
    </Container>
  );
};

export default connector(TaskForm);
