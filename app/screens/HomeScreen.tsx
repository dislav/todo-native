import React from 'react';
import styled from 'styled-components/native';

import TasksList from '../components/TasksList/TasksList';
import TaskForm from '../components/TaskForm/TaskForm';

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

const HomeScreen = () => {
    return (
        <Wrapper>
            <TasksList />
            <TaskForm />
        </Wrapper>
    );
};

export default HomeScreen;
