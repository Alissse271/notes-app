import { Input } from 'components/Input/Input';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 40px;

    padding-top: 1px;

    font-size: 32px;

    @media (max-width: 475px) {
        font-size: 24px;
    }
`;
const InputContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;

    height: 40px;
    width: inherit;

    z-index: 3;
`;
const StyledNotesItem = styled.li`
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

const NoteText = styled.span`
    font-size: 32px;

    @media (max-width: 475px) {
        font-size: 24px;
    }
`;
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
`;
const StyledInput = styled(Input)`
    background-color: transparent;
    color: transparent;
    caret-color: #000;
`;
const StyledText = styled.span`
    margin-top: 5px;
    font-size: 32px;

    @media (max-width: 475px) {
        font-size: 24px;
    }
`;

export {
    Container,
    InputContainer,
    StyledNotesItem,
    NoteText,
    ButtonsContainer,
    StyledInput,
    StyledText,
};
