import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { StyledInput } from './styles';

interface InputProps {
    type: HTMLInputTypeAttribute;
    value: string;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Input = ({
    type,
    value,
    onChange,
    placeholder,
    className,
}: InputProps) => {
    return (
        <StyledInput
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
};
