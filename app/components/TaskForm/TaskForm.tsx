import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addTaskRequest } from '../../store/todo/actions';
import { Container, Input, Button } from './TaskForm.styled';

const mapDispatchToProps = {
    addTaskRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TaskForm: React.FC<PropsFromRedux> = ({ addTaskRequest }) => {
    const [task, setTask] = useState('dsa');

    const onSubmit = () => {
        addTaskRequest(task);
    };

    return (
        <Container>
            <Input value={task} onChangeText={setTask} />
            <Button title="Добавить" onPress={onSubmit} />
        </Container>
    );
};

export default connector(TaskForm);
