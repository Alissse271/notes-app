import { deleteIcon, editIcon, saveIcon } from 'assets';
import { IconButton, Input } from 'components';
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

    const { deleteNote, saveEditedNote } = useNotesContext();

    const handleEditNote = () => {
        setValue(title);
        toggleEditMode();
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
                <>
                    <Input
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
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
