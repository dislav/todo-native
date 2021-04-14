import React from 'react';

import { Wrapper, RadioButtonChecked } from './RadioButton.styled';

interface IRadioButton {
    checked?: boolean;
}

const RadioButton: React.FC<IRadioButton> = ({ checked }) => {
    return <Wrapper>{checked && <RadioButtonChecked />}</Wrapper>;
};

export default RadioButton;
