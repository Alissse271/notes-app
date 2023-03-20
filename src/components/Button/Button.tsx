import { StyledButton } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    label: string;
    onClick: () => void;
    isPrimary?: boolean;
}

export const Button = ({ type, label, onClick, isPrimary }: ButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick} primary={isPrimary}>
            {label}
        </StyledButton>
    );
};
