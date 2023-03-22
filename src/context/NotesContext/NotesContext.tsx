import { createContext, useContext, useState } from 'react';
import { INotesContext, Note, NotesContextProviderProps } from './types';

const NotesContext = createContext<INotesContext>({} as INotesContext);
const notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
const useNotesContextValue = () => {
    const [notesContext, setNotesContext] = useState<INotesContext>(() => ({
        notes: notes,
        setNewNote: (newNote) => {
            setNotesContext((ctx) => ({
                ...ctx,
                notes: [...ctx.notes, newNote],
            }));
        },
        deleteNote: (id) => {
            setNotesContext((ctx) => ({
                ...ctx,
                notes: ctx.notes.filter((note) => note.id !== id),
            }));
        },
        deleteAllNotes: () => {
            setNotesContext((ctx) => ({
                ...ctx,
                notes: [],
            }));
        },
        saveEditedNote: (id, title) => {
            setNotesContext((ctx) => ({
                ...ctx,
                notes: ctx.notes.map((note) => {
                    if (note.id === id) {
                        note.title = title;
                    }
                    return note;
                }),
            }));
        },
    }));
    return notesContext;
};

export const useNotesContext = () => useContext<INotesContext>(NotesContext);

export const NotesContextProvider = ({
    children,
}: NotesContextProviderProps) => {
    return (
        <NotesContext.Provider value={useNotesContextValue()}>
            {children}
        </NotesContext.Provider>
    );
};
