import styled from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean }>`
    font-size: 16px;
    line-height: 19px;
    color: rgb(255, 255, 255);
    padding: 15px 147px;
    background-color: ${({ primary }) => (primary ? `#23c9ff` : '#f01f1f')};
    border-radius: 10px;
    cursor: pointer;
`;

export { StyledButton };
