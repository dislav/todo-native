import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Path } from 'react-native-svg';
import { Container, Item, ItemWrapper, Icon, Text, TextCount } from './Header.styled';
import { RootState } from '../../store/rootReducer';

const mapStateToProps = ({ todo }: RootState) => ({ tasks: todo.tasks });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Header: React.FC<PropsFromRedux> = ({ tasks }) => {
  const history = useHistory();

  const favoriteCount = tasks.reduce((val, { favorite }) => (val += favorite ? 1 : 0), 0);

  return (
    <Container>
      <Item onPress={() => history.push('/favorite')} activeOpacity={0.6} underlayColor="#FFFFFF">
        <ItemWrapper>
          <Icon viewBox="0 0 576 512">
            <Path
              fill="currentColor"
              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
            />
          </Icon>
          <Text>Важно</Text>
          {favoriteCount > 0 && <TextCount>{favoriteCount}</TextCount>}
        </ItemWrapper>
      </Item>
      <Item onPress={() => history.push('/tasks')} activeOpacity={0.6} underlayColor="#FFFFFF">
        <ItemWrapper>
          <Icon viewBox="0 0 512 512">
            <Path
              fill="currentColor"
              d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
            />
          </Icon>
          <Text>Задачи</Text>
          {tasks.length > 0 && <TextCount>{tasks.length}</TextCount>}
        </ItemWrapper>
      </Item>
    </Container>
  );
};

export default connector(Header);
