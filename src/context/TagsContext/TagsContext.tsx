import { createContext, useContext, useState } from 'react';
import { ITagsContext, TagsContextProviderProps } from './types';

const TagsContext = createContext<ITagsContext>({} as ITagsContext);

const useTagsContextValue = () => {
    const [tagsContext, setTagsContext] = useState<ITagsContext>(() => ({
        tags: [],
        setNewTag: (newTag) => {
            setTagsContext((ctx) => ({
                ...ctx,
                tags: [...ctx.tags, newTag],
            }));
        },
        deleteTag: (title) => {
            setTagsContext((ctx) => ({
                ...ctx,
                tags: ctx.tags.filter((tag) => tag.title !== title),
            }));
        },
    }));
    return tagsContext;
};

export const useTagsContext = () => useContext<ITagsContext>(TagsContext);

export const TagsContextProvider = ({ children }: TagsContextProviderProps) => {
    return (
        <TagsContext.Provider value={useTagsContextValue()}>
            {children}
        </TagsContext.Provider>
    );
};
