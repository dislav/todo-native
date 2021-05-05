import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Task } from '../../store/todo/types';
import {
  removeTaskRequest,
  toggleTaskRequest,
  favoriteTaskRequest,
} from '../../store/todo/actions';
import {
  Wrapper,
  TaskTouchable,
  TaskItemText,
  Remove,
  RemoveIcon,
  FavoriteIcon,
  Favorite,
} from './TaskItem.styled';
import RadioButton from '../RadioButton/RadioButton';
import { Path } from 'react-native-svg';

const mapDispatchToProps = {
  removeTaskRequest,
  toggleTaskRequest,
  favoriteTaskRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TaskItem: React.FC<Task & PropsFromRedux> = ({
  id,
  listId,
  text,
  completed,
  favorite,
  removeTaskRequest,
  toggleTaskRequest,
  favoriteTaskRequest,
}) => {
  const onClick = () => {
    toggleTaskRequest(id);
  };

  const onAddFavorite = () => {
    favoriteTaskRequest(id);
  };

  const onRemoveTask = () => {
    removeTaskRequest({ id, listId, text, completed, favorite });
  };

  return (
    <Wrapper onPress={onClick}>
      <TaskTouchable>
        <RadioButton checked={completed} />
        <TaskItemText isChecked={completed}>{text}</TaskItemText>
        <Favorite onPress={onAddFavorite}>
          {favorite ? (
            <FavoriteIcon viewBox="0 0 576 512">
              <Path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </FavoriteIcon>
          ) : (
            <FavoriteIcon viewBox="0 0 576 512">
              <Path
                fill="currentColor"
                d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
              />
            </FavoriteIcon>
          )}
        </Favorite>
        <Remove onPress={onRemoveTask}>
          {({ pressed }) => (
            <RemoveIcon viewBox="0 0 448 512">
              <Path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </RemoveIcon>
          )}
        </Remove>
      </TaskTouchable>
    </Wrapper>
  );
};

export default connector(TaskItem);
