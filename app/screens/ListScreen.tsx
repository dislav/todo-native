import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-native';
import styled from 'styled-components/native';
import { RootState } from '../store/rootReducer';
import ListTop from '../components/ListTop/ListTop';
import TasksList from '../components/TasksList/TasksList';
import TaskForm from '../components/TaskForm/TaskForm';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const mapStateToProps = ({ list }: RootState) => ({ lists: list.lists });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IListScreen {
    id: string;
}

const ListScreen: React.FC<RouteComponentProps<IListScreen> & PropsFromRedux> = ({ match, lists }) => {
    const listId = +match.params.id;
    const [currentList] = lists.filter(({ id }) => id === listId);

    return (
        <Container>
            <ListTop {...currentList} />
            <TasksList listId={listId} />
            <TaskForm listId={listId} />
        </Container>
    );
};

export default connector(ListScreen);
