import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-native';
import { connect, ConnectedProps } from 'react-redux';
import { Path } from 'react-native-svg';
import { Container, Button, Icon, Text, Input } from './ListTop.styled';
import { List } from '../../store/list/types';
import { updateListRequest } from '../../store/list/actions';
import { useDebounce } from '../../hooks';

const mapDispatchToProps = {
    updateListRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ListTop: React.FC<List & PropsFromRedux> = ({ id, title, updateListRequest }) => {
    const history = useHistory();

    const [inputValue, setInputValue] = useState(title);

    const onClick = () => {
        history.push('/');
    };

    const debouncedInput = useDebounce(inputValue, 500);

    useEffect(() => {
        updateListRequest({ id, title: debouncedInput })
    }, [debouncedInput]);

    return (
        <Container>
            <Button onPress={onClick} activeOpacity={0.6} underlayColor='#FFFFFF'>
                <>
                    <Icon viewBox='0 0 320 512'>
                        <Path fill='currentColor'
                              d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z' />
                    </Icon>
                    <Text>Назад</Text>
                </>
            </Button>
            <Input onChangeText={setInputValue} value={inputValue} />
        </Container>
    );
};

export default connector(ListTop);
