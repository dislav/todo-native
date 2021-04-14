import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { Container } from './Achievements.styled';

const mapStateToProps = ({ todo }: RootState) => ({ todo });

const Achievements: React.FC = () => {
    return <Container></Container>;
};

export default Achievements;
