import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container } from './Lists.styled';
import { RootState } from '../../store/rootReducer';
import ListItem from '../Listitem/ListItem';

const mapStateToProps = ({ list }: RootState) => ({ lists: list.lists });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Lists: React.FC<PropsFromRedux> = ({ lists }) => {
  return (
    <Container>
      {lists.map((list) => (
        <ListItem key={list.id} {...list} />
      ))}
    </Container>
  );
};

export default connector(Lists);
