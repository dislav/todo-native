import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { Modal, Container, Text, Button, ButtonText } from './Achievements.styled';
import { closeAchievementsRequest } from '../../store/achievements/actions';

const mapStateToProps = ({ achievements }: RootState) => ({ achievements });

const mapDispatchToProps = {
  closeAchievementsRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Achievements: React.FC<PropsFromRedux> = ({ achievements, closeAchievementsRequest }) => {
  console.log(achievements);
  return (
    <Modal animationType={'slide'} transparent={true} visible={achievements.open}>
      <Container>
        <Text>
          Поздравляем!{'\n\n'}
          {achievements.text}
        </Text>
        <Button onPress={closeAchievementsRequest}>
          <ButtonText>Закрыть</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
};

export default connector(Achievements);
