import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface IconButtonProps {
    type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick: () => void;
    iconSrc: string;
}

export const IconButton = ({ type, onClick, iconSrc }: IconButtonProps) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            iconSrc={iconSrc}
        ></StyledButton>
    );
};
