import {
    StyledMainTemplate,
    StyledButton,
    StyledSearch,
    EmptyList,
    Text,
    EmptyTagsList,
} from './styles';
import { CreateNoteBlock, NotesList, TagsList } from 'components';
import { Note, useNotesContext, useTagsContext } from 'context';
import { useDebounce, useInput } from 'hooks';
import { useEffect, useState } from 'react';

export const MainTemplate = () => {
    const { notes, deleteAllNotes } = useNotesContext();
    const { tags } = useTagsContext();

    const search = useInput();
    const [filteredList, setFilteredList] = useState<Note[]>(notes);
    const debauncedValue = useDebounce(search.value, 500);
    const handleDeleteAllNotes = () => {
        deleteAllNotes();
        localStorage.setItem('notes', JSON.stringify([]));
    };

    useEffect(() => {
        setFilteredList(
            notes.filter((notes) =>
                notes.title.toLowerCase().includes(search.value.toLowerCase())
            )
        );
    }, [notes, debauncedValue]);

    return (
        <StyledMainTemplate>
            <CreateNoteBlock />
            <StyledSearch
                type="search"
                pattern="/#\w+/g"
                placeholder="Search by tag"
                {...search}
            />

            {filteredList.length ? (
                <NotesList notes={filteredList} />
            ) : (
                <EmptyList>
                    <Text>Empty notes list!</Text>
                </EmptyList>
            )}
            {tags.length > 0 ? (
                <TagsList tags={tags} />
            ) : (
                <EmptyTagsList>
                    <Text>The list of tags is currently empty!</Text>
                </EmptyTagsList>
            )}

            <StyledButton
                type="button"
                label="Delete all notes"
                onClick={handleDeleteAllNotes}
            />
        </StyledMainTemplate>
    );
};
