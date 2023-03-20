import { StyledButton } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    label: string;
    onClick: () => void;
    isPrimary?: boolean;
    className?: string;
}

export const Button = ({
    type,
    label,
    onClick,
    isPrimary,
    className,
}: ButtonProps) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            primary={isPrimary}
            className={className}
        >
            {label}
        </StyledButton>
    );
};
