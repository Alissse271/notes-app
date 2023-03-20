import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { StyledInput } from './styles';

interface InputProps {
    type: HTMLInputTypeAttribute;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, value, onChange }: InputProps) => {
    return <StyledInput type={type} value={value} onChange={onChange} />;
};
