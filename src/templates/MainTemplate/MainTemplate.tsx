import { StyledMainTemplate } from './styles';
import { NotesList } from 'components';
import { useNotesContext } from 'context';

export const MainTemplate = () => {
    const { notes } = useNotesContext();
    return (
        <StyledMainTemplate>
            <NotesList notes={notes} />
        </StyledMainTemplate>
    );
};
