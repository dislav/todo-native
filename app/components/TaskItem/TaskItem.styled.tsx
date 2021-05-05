import styled from 'styled-components/native';

interface ITaskItem {
    isChecked?: boolean;
}

export const Wrapper = styled.TouchableOpacity<ITaskItem>``;

export const TaskTouchable = styled.View`
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: #F5F5F5;
  padding: 20px;
  margin-bottom: 4px;
`;

export const TaskItemText = styled.Text<ITaskItem>`
  flex: 0 1 100%;
  color: black;
  font-size: 16px;
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
  margin-left: 20px;
`;

export const TaskItemRemove = styled.Button`
  color: black;
`;
