import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface IconButtonProps {
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick: () => void;
    iconSrc: string;
    className?: string;
}

export const IconButton = ({
    type,
    onClick,
    iconSrc,
    className,
}: IconButtonProps) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            iconSrc={iconSrc}
            className={className}
        ></StyledButton>
    );
};
