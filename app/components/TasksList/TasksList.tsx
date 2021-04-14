import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import { Wrapper } from './TasksList.styled';
import TaskItem from '../TaskItem/TaskItem';

const mapStateToProps = ({ todo }: RootState) => ({ todo });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TasksList: React.FC<PropsFromRedux> = ({ todo }) => {
    console.log(todo);

    return (
        <Wrapper>
            {todo.tasks.map((task, index) => (
                <TaskItem key={index} {...task} />
            ))}
        </Wrapper>
    );
};

export default connector(TasksList);
