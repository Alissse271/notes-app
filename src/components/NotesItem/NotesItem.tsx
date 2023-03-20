import { deleteIcon, editIcon, saveIcon } from 'assets';
import { IconButton } from 'components';
import { Note, useNotesContext } from 'context';
import { useToggle } from 'hooks';
import { useState } from 'react';
import { ButtonsContainer, NoteText, StyledNotesItem } from './styles';

interface Props {
    note: Note;
}

export const NotesItem = ({ note }: Props) => {
    const { title, id } = note;
    const [value, setValue] = useState('');
    const [isEditMode, toggleEditMode] = useToggle(false);

    const { deleteNote } = useNotesContext();

    const handleEditNote = () => toggleEditMode();
    const handleSaveNote = () => {
        toggleEditMode();
    };
    const handleDeleteNote = () => {
        deleteNote(id);
    };

    return (
        <StyledNotesItem>
            {isEditMode ? (
                <>
                    <NoteText>{title}</NoteText>
                    <IconButton
                        type="button"
                        onClick={handleSaveNote}
                        iconSrc={saveIcon}
                    />
                </>
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
