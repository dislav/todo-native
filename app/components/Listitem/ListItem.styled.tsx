import styled from 'styled-components/native';
import Svg from 'react-native-svg';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
`;

export const Wrapper = styled.Pressable`
  flex: 0 1 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Svg)`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 14px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: black;
`;

export const Count = styled.Text`
  font-size: 14px;
  color: gray;
  margin-left: auto;
  margin-right: 14px;
`;

export const Remove = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`;

export const RemoveIcon = styled(Svg)`
  width: 100%;
  height: 100%;
  color: red;
  transform: rotate(-45deg);
`;