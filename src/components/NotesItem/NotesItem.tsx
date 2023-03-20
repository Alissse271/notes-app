import { deleteIcon, editIcon, saveIcon } from 'assets';
import { IconButton } from 'components';
import { useToggle } from 'hooks';
import { useState } from 'react';
import { ButtonsContainer, NoteText, StyledNotesItem } from './styles';

export const NotesItem = () => {
    const [value, setValue] = useState('');
    const [isEditMode, toggleEditMode] = useToggle(false);

    const handleEditNote = () => toggleEditMode();
    const handleSaveNote = () => {
        toggleEditMode();
    };

    return (
        <StyledNotesItem>
            {isEditMode ? (
                <>
                    <NoteText>NoteItem</NoteText>
                    <IconButton
                        type="button"
                        onClick={handleSaveNote}
                        iconSrc={saveIcon}
                    />
                </>
            ) : (
                <>
                    <NoteText>NoteItem</NoteText>
                    <ButtonsContainer>
                        <IconButton
                            type="button"
                            onClick={handleEditNote}
                            iconSrc={editIcon}
                        />
                        <IconButton
                            type="button"
                            onClick={() => console.log('icon')}
                            iconSrc={deleteIcon}
                        />
                    </ButtonsContainer>
                </>
            )}
        </StyledNotesItem>
    );
};
