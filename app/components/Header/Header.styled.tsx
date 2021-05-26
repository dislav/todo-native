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
  color: #2F9BFF;
  margin-right: 14px;
`;

export const Text = styled.Text`
  color: #2F9BFF;
  font-size: 16px;
  font-weight: bold;
`;

export const Count = styled.View`
  display: flex;
  flex-direction: row;
  min-width: 22px;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  border-radius: 100px;
  padding: 2px 4px;
  margin-left: auto;
`;

export const TextCount = styled.Text`
  font-size: 14px;
`;
