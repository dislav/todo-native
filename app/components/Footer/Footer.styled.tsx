import styled from 'styled-components/native';
import Svg from 'react-native-svg';

export const Container = styled.View`
    padding-bottom: 20px;
    margin-top: auto;
`;

export const Button = styled.TouchableHighlight`
    padding: 16px 20px;
`;

export const ButtonView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Svg)`
    width: 14px;
    height: 14px;
    color: black;
    margin-right: 10px;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
