import React from 'react';
import { Container, Title, Description, Progress, ProgressInner } from './AchievementCard.styled';
import { RootState } from '../../store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ achievements }: RootState) => ({ totalCount: achievements.count });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IAchievementCard {
  name: string;
  description: string;
  count: number;
}

const AchievementCard: React.FC<IAchievementCard & PropsFromRedux> = ({
  name,
  description,
  count,
  totalCount,
}) => {
  return (
    <Container succeeded={count <= totalCount}>
      <Title succeeded={count <= totalCount}>{name}</Title>
      <Description succeeded={count <= totalCount}>{description}</Description>
      {count > totalCount && (
        <Progress>
          <ProgressInner style={{ width: `${(totalCount / count) * 100}%` }} />
        </Progress>
      )}
    </Container>
  );
};

export default connector(AchievementCard);
