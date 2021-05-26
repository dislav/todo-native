import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  border-radius: 6px;
  padding: 20px 32px;
  margin: auto;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-bottom: 32px;
`;

export const Button = styled.Pressable`
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 10px 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

