import styled from 'styled-components';

const StyledNotesList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    min-height: 30vh;
    max-height: 70vh;

    margin: 40px 0;

    overflow: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export { StyledNotesList };
