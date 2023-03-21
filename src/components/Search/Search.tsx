import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { StyledSearch } from './styles';

interface SearchProps {
    type: HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Search = ({
    type,
    placeholder,
    value,
    onChange,
    className,
}: SearchProps) => {
    return (
        <StyledSearch
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
};
