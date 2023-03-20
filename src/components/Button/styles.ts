import styled from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean }>`
    padding: 15px 20px;

    font-size: 16px;
    line-height: 19px;

    color: rgb(255, 255, 255);
    background-color: ${({ primary }) => (primary ? `#23c9ff` : '#f01f1f')};

    border-radius: 10px;
`;

export { StyledButton };
