import styled from 'styled-components';

const StyledButton = styled.button<{ iconSrc: string }>`
    width: 40px;
    height: 40px;

    background-color: transparent;
    background: center center no-repeat url(${({ iconSrc }) => `${iconSrc}`});

    @media (max-width: 475px) {
        width: 30px;
        height: 30px;
    }
`;

export { StyledButton };
