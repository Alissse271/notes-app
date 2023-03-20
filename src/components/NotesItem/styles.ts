import styled from 'styled-components';

const StyledNotesItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;

    padding: 20px;

    border: 1px solid #a9a9a9;
    border-radius: 10px;
`;

const NoteText = styled.span`
    font-size: 32px;
`;
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
`;

export { StyledNotesItem, NoteText, ButtonsContainer };
