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
    background-color: gray;
    padding: 20px;
    margin-bottom: 4px;
`;

export const TaskItemText = styled.Text<ITaskItem>`
    color: black;
    text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
    margin-left: 20px;
`;

export const TaskItemRemove = styled.Button`
    color: black;
`;
