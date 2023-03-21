import styled from 'styled-components';

const StyledSearch = styled.input`
    width: 100%;

    padding: 20px;

    font-size: 32px;

    border: 1px solid rgb(169, 169, 169);
    border-radius: 10px;

    &:focus-visible {
        outline: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }

    @media (max-width: 475px) {
        font-size: 20px;
    }
`;

export { StyledSearch };
