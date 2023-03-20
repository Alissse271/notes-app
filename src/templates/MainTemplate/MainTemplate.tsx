import { StyledMainTemplate, StyledButton } from './styles';
import { CreateNoteBlock, NotesList } from 'components';
import { useNotesContext } from 'context';

export const MainTemplate = () => {
    const { notes } = useNotesContext();
    return (
        <StyledMainTemplate>
            <CreateNoteBlock />
            <NotesList notes={notes} />
            <StyledButton
                type={'button'}
                label="Delete all notes"
                onClick={() => console.log('sd')}
            />
        </StyledMainTemplate>
    );
};
