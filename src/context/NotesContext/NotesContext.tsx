import { createContext, useContext, useState } from 'react';
import { INotesContext, NotesContextProviderProps } from './types';

const NotesContext = createContext<INotesContext>({} as INotesContext);

const useNotesContextValue = () => {
    const [notesContext, setNotesContext] = useState<INotesContext>(() => ({
        notes: [
            { title: '111', id: '1' },
            { title: '222', id: '2' },
        ],
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
