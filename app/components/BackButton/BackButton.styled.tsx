import styled from 'styled-components/native';
import Svg from 'react-native-svg';

export const Container = styled.View`
  padding: 10px 20px 0;
`;

export const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled(Svg)`
  width: 14px;
  height: 14px;
  color: black;
  margin-right: 6px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: black;
`;
