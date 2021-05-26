import React from 'react';
import { Container, Text } from './AchievementList.styled';

import AchievementCard from '../AchievementCard/AchievementCard';
import { RootState } from '../../store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ achievements }: RootState) => ({ count: achievements.count });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const AchievementList: React.FC<PropsFromRedux> = ({ count }) => {
  return (
    <Container>
      <Text>Выполнено задач: {count}</Text>
      <AchievementCard name={'Бывалый'} description={'Выполнить 100 задач'} count={100} />
      <AchievementCard name={'Опытный'} description={'Выполнить 250 задач'} count={250} />
      <AchievementCard name={'Профессионал'} description={'Выполнить 1000 задач'} count={1000} />
    </Container>
  );
};

export default connector(AchievementList);
