import React from 'react';
import styled from 'styled-components/native';

// import TasksList from '../components/TasksList/TasksList';
// import TaskForm from '../components/TaskForm/TaskForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

const HomeScreen: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Footer />
            {/* <TasksList /> */}
            {/* <TaskForm /> */}
        </Wrapper>
    );
};

export default HomeScreen;
