import { NotesItem } from 'components';
import { Note } from 'context';
import { StyledNotesList } from './styles';

interface Props {
    notes: Note[];
}

export const NotesList = ({ notes }: Props) => {
    return (
        <StyledNotesList>
            {notes.map((note) => {
                return <NotesItem note={note} key={note.id} />;
            })}
        </StyledNotesList>
    );
};
