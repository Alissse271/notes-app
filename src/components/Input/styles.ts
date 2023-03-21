import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 40px;

    font-size: 32px;

    &:focus-visible {
        outline: none;
    }

    @media (max-width: 475px) {
        height: auto;

        font-size: 24px;
    }
`;

export { StyledInput };
