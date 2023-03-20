import { ReactNode } from 'react';

export interface NotesContextProviderProps {
    children: ReactNode;
}

export interface Note {
    title: string;
    id: string;
}
export interface NotesContext {
    notes: Note[];
    setNewNote: (newNote: Note) => void;
    deleteNote: (id: string) => void;
}
