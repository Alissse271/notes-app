import { ReactNode } from 'react';

export interface TagsContextProviderProps {
    children: ReactNode;
}

export interface Tag {
    title: string;
}
export interface ITagsContext {
    tags: Tag[];
    setNewTag: (newTag: Tag) => void;
    deleteTag: (title: string) => void;
}
