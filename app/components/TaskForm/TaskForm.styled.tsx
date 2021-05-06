import styled from 'styled-components/native';
import Svg from 'react-native-svg';

export const Container = styled.View``;

export const Input = styled.TextInput`
  min-width: 100%;
  max-height: 50%;
  border: 1px solid gray;
  font-size: 16px;
  line-height: 20px;
  padding: 6px 12px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Button = styled.Pressable``;

export const Modal = styled.Modal``;

export const ModalWrapper = styled.View`
  max-width: 80%;
  min-width: 60%;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 14px;
  padding: 16px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
  margin: 50% auto auto;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ModalFooter = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ModalButtonText = styled.Text`
  font-size: 16px;
  padding: 6px 10px;
  background-color: #f5f5f5;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Icon = styled(Svg)`
    width: 14px;
    height: 14px;
    color: black;
    margin-right: 10px;
`;

export const CreateButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 40px;
`;
