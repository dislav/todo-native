import styled from 'styled-components/native';
import Svg from 'react-native-svg';

export const Container = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  padding-top: 20px;
  padding-bottom: 16px;
`;

export const Item = styled.TouchableHighlight``;

export const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
`;

export const Icon = styled(Svg)`
  width: 24px;
  height: 24px;
  color: black;
  margin-right: 14px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextCount = styled.Text`
  font-size: 14px;
  margin-left: auto;
`;
