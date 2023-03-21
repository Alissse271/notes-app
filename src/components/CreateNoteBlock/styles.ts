import styled from 'styled-components';

const Container = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;

    padding: 20px;

    border: 1px solid #a9a9a9;
    border-radius: 10px;

    @media (max-width: 475px) {
        column-gap: 10px;
        padding: 10px;
    }
`;
const StyledInput = styled.input`
    width: 100%;
    height: 40px;

    font-size: 32px;

    &:focus-visible {
        outline: none;
    }

    @media (max-width: 475px) {
        font-size: 20px;
    }
`;
const ErrorMessage = styled.p`
    color: #f01f1f;
`;

export { Container, StyledInput, ErrorMessage };
