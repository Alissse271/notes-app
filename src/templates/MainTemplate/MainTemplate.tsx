import { StyledMainTemplate, StyledButton, EmptyList, Text } from './styles';
import { CreateNoteBlock, NotesList } from 'components';
import { useNotesContext } from 'context';

export const MainTemplate = () => {
    const { notes, deleteAllNotes } = useNotesContext();
    const handleDeleteAllNotes = () => {
        deleteAllNotes();
    };
    return (
        <StyledMainTemplate>
            <CreateNoteBlock />
            {notes.length ? (
                <NotesList notes={notes} />
            ) : (
                <EmptyList>
                    <Text>Create some notes!</Text>
                </EmptyList>
            )}
            <StyledButton
                type={'button'}
                label="Delete all notes"
                onClick={handleDeleteAllNotes}
            />
        </StyledMainTemplate>
    );
};
