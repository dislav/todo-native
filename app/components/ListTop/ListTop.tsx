import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Container, Input } from './ListTop.styled';
import { List } from '../../store/list/types';
import { updateListRequest } from '../../store/list/actions';
import { useDebounce } from '../../hooks';
import BackButton from '../BackButton/BackButton';

const mapDispatchToProps = {
  updateListRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ListTop: React.FC<List & PropsFromRedux> = ({ id, title, updateListRequest }) => {
  const [inputValue, setInputValue] = useState(title);

  const debouncedInput = useDebounce(inputValue, 500);

  useEffect(() => {
    updateListRequest({ id, title: debouncedInput });
  }, [debouncedInput]);

  return (
    <>
      <BackButton url={'/'} />
      <Container>
        <Input onChangeText={setInputValue} value={inputValue} />
      </Container>
    </>
  );
};

export default connector(ListTop);
