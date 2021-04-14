import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Task } from '../../store/todo/types';
import { removeTaskRequest, toggleTaskRequest } from '../../store/todo/actions';
import { Wrapper, TaskTouchable, TaskItemText, TaskItemRemove } from './TaskItem.styled';
import RadioButton from '../RadioButton/RadioButton';

const mapDispatchToProps = {
    removeTaskRequest,
    toggleTaskRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TaskItem: React.FC<Task & PropsFromRedux> = ({
    id,
    text,
    completed,
    removeTaskRequest,
    toggleTaskRequest,
}) => {
    const onClick = () => {
        toggleTaskRequest(id);
    };

    const onRemoveTask = () => {
        removeTaskRequest(id);
    };

    return (
        <Wrapper onPress={onClick}>
            <TaskTouchable>
                <RadioButton checked={completed} />
                <TaskItemText isChecked={completed}>{text}</TaskItemText>
                <TaskItemRemove title="X" onPress={onRemoveTask} />
            </TaskTouchable>
        </Wrapper>
    );
};

export default connector(TaskItem);
