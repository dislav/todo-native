import React from 'react';
import { useHistory } from 'react-router-native';
import { connect, ConnectedProps } from 'react-redux';
import { Path } from 'react-native-svg';
import { Container, Wrapper, Icon, Text, Remove, RemoveIcon } from './ListItem.styled';
import { List } from '../../store/list/types';
import { removeListRequest } from '../../store/list/actions';

const mapDispatchToProps = {
    removeListRequest
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ListItem: React.FC<List & PropsFromRedux> = ({ id, title, tasksCount, removeListRequest }) => {
    const history = useHistory();

    const onClick = () => {
        history.push(`/list/${id}`);
    }

    const onRemoveList = () => {
        removeListRequest(id);
    }

    return (
        <Container>
            <Wrapper onPress={onClick}>
                {({ pressed }) => (
                    <>
                        <Icon viewBox="0 0 512 512">
                            <Path
                                fill="currentColor"
                                d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                            />
                        </Icon>
                        <Text>{title}</Text>
                        <Text>{tasksCount}</Text>
                    </>
                )}
            </Wrapper>
            <Remove onPress={onRemoveList}>
                {({ pressed }) => (
                    <RemoveIcon viewBox="0 0 448 512">
                        <Path
                            fill="currentColor"
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                        />
                    </RemoveIcon>
                )}
            </Remove>
        </Container>
    );
};

export default connector(ListItem);
