import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div`
    position: relative;

    width: 100%;
    min-height: 40px;

    padding-top: 1px;

    font-size: 32px;

    overflow: hidden;

    @media (max-width: 475px) {
        min-height: 30px;

        /* padding-top: 9px; */

        font-size: 18px;
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

    min-height: 40px;
    width: inherit;

    z-index: 3;

    @media (max-width: 475px) {
        min-height: 30px;
    }
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

    overflow: hidden;

    @media (max-width: 475px) {
        font-size: 18px;
    }
`;
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
`;

const StyledInput = styled(TextareaAutosize)`
    width: 100%;

    font-size: 32px;

    color: transparent;
    background-color: transparent;

    border: none;
    caret-color: #000;
    resize: none;
    overflow: hidden;
    outline: none;

    @media (max-width: 475px) {
        font-size: 18px;
    }
`;
const StyledText = styled.span`
    display: block;
    width: calc(100% - 60px);
    font-size: 32px;

    overflow: hidden;

    @media (max-width: 475px) {
        width: calc(100% - 47px);

        font-size: 18px;
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
