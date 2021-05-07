import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 14px;
  padding: 20px;
  margin: auto;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Button = styled.Pressable`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

