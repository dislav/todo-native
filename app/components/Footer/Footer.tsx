import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Path } from 'react-native-svg';
import { Container, Button, ButtonView, Icon, Text } from './Footer.styled';
import { createListRequest } from '../../store/list/actions';

const mapDispatchToProps = {
    createListRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Footer: React.FC<PropsFromRedux> = ({ createListRequest }) => {
    const history = useHistory();

    return (
        <Container>
            <Button onPress={() => createListRequest(history)} activeOpacity={0.6} underlayColor="#FFFFFF">
                <ButtonView>
                    <Icon viewBox="0 0 448 512">
                        <Path
                            fill="currentColor"
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        />
                    </Icon>
                    <Text>Создать список</Text>
                </ButtonView>
            </Button>
        </Container>
    );
};

export default connector(Footer);
