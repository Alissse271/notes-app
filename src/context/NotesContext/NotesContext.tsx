import { createContext, useContext, useState } from 'react';
import { NotesContext, NotesContextProviderProps } from './types';

const NotesContext = createContext<NotesContext>({} as NotesContext);

const useNotesContextValue = () => {
    const [notesContext, setNotesContext] = useState<NotesContext>(() => ({
        notes: [],
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
    }));
    return notesContext;
};

export const useNotesContext = () => useContext<NotesContext>(NotesContext);

export const NotesContextProvider = ({
    children,
}: NotesContextProviderProps) => {
    return (
        <NotesContext.Provider value={useNotesContextValue()}>
            {children}
        </NotesContext.Provider>
    );
};
