import { deleteIcon, editIcon, saveIcon } from 'assets';
import { IconButton } from 'components';
import { Note, useNotesContext } from 'context';
import { useToggle } from 'hooks';
import { useState } from 'react';
import { highlightHashtags } from 'utils';
import {
    Container,
    InputContainer,
    ButtonsContainer,
    NoteText,
    StyledNotesItem,
    StyledInput,
    StyledText,
} from './styles';

interface Props {
    note: Note;
}

export const NotesItem = ({ note }: Props) => {
    const { title, id } = note;

    const [value, setValue] = useState(title);
    const [hashtags, setHashtags] = useState(value);
    const [isEditMode, toggleEditMode] = useToggle(false);

    const { deleteNote, saveEditedNote } = useNotesContext();

    const handleEditNote = () => {
        setValue(title);
        setHashtags(highlightHashtags(value));
        toggleEditMode();
    };
    const handleFindHashtags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        setHashtags(highlightHashtags(inputValue));
    };

    const handleSaveNote = () => {
        saveEditedNote(id, value);
        toggleEditMode();
    };
    const handleDeleteNote = () => {
        deleteNote(id);
    };

    return (
        <StyledNotesItem>
            {isEditMode ? (
                <Container>
                    <StyledText
                        dangerouslySetInnerHTML={{ __html: hashtags }}
                    ></StyledText>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            onChange={handleFindHashtags}
                            value={value}
                        />
                        <IconButton
                            type="button"
                            onClick={handleSaveNote}
                            iconSrc={saveIcon}
                        />
                    </InputContainer>
                </Container>
            ) : (
                <>
                    <NoteText>{title}</NoteText>
                    <ButtonsContainer>
                        <IconButton
                            type="button"
                            onClick={handleEditNote}
                            iconSrc={editIcon}
                        />
                        <IconButton
                            type="button"
                            onClick={handleDeleteNote}
                            iconSrc={deleteIcon}
                        />
                    </ButtonsContainer>
                </>
            )}
        </StyledNotesItem>
    );
};
