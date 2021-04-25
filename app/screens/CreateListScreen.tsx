import React from 'react'
import { RouteComponentProps } from 'react-router-native';
import styled from 'styled-components/native';
import ListTop from '../components/ListTop/ListTop';

const Container = styled.SafeAreaView`
    flex: 1;
`;

interface ICreateListScreen {
    id: string;
}

const AddListScreen: React.FC<RouteComponentProps<ICreateListScreen>> = ({ match }) => {
    console.log(match.params.id);
    
    return (
        <Container>
            <ListTop />
        </Container>
    )
}

export default AddListScreen
