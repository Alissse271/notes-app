import { AppContext } from './AppContext/AppContext';
import {
    NotesContextProvider,
    useNotesContext,
} from './NotesContext/NotesContext';
import { Note, INotesContext } from './NotesContext/types';
import { TagsContextProvider, useTagsContext } from './TagsContext/TagsContext';
import { Tag, ITagsContext } from './TagsContext/types';

export {
    NotesContextProvider,
    useNotesContext,
    TagsContextProvider,
    useTagsContext,
    AppContext,
};
export type { Note, INotesContext, Tag, ITagsContext };
