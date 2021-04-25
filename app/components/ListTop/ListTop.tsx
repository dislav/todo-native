import React from 'react';
import { useHistory } from 'react-router-native';
import { Path } from 'react-native-svg';
import { Container, Button, Icon, Text, Input } from './ListTop.styled';

const ListTop = () => {
    const history = useHistory();

    const onClick = () => {
        history.push('/');
    }

    return (
        <Container>
            <Button onPress={onClick} activeOpacity={0.6} underlayColor="#FFFFFF">
                <>
                    <Icon viewBox="0 0 320 512">
                        <Path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                    </Icon>
                    <Text>Назад</Text>
                </>
            </Button>
            <Input onChangeText={() => console.log(1)} value="Список без названия" />
        </Container>
    );
};

export default ListTop;
