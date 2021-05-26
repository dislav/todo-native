import styled from 'styled-components/native';
import Svg from 'react-native-svg';

interface ITaskItem {
  isChecked?: boolean;
}

export const Wrapper = styled.TouchableOpacity<ITaskItem>``;

export const TaskTouchable = styled.View`
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: #f5f5f5;
  padding: 20px;
  margin-bottom: 12px;
`;

export const TaskItemText = styled.Text<ITaskItem>`
  flex: 0 1 100%;
  color: black;
  font-size: 16px;
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
  margin-left: 20px;
  padding-right: 10px;
`;

export const Remove = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RemoveIcon = styled(Svg)`
  width: 20px;
  height: 20px;
  color: red;
  transform: rotate(-45deg);
`;

export const Favorite = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const FavoriteIcon = styled(Svg)`
  width: 20px;
  height: 20px;
  color: black;
`;
