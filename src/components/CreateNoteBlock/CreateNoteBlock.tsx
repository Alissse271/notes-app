import { Button } from 'components';
import { Container, StyledInput, ErrorMessage } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useNotesContext, useTagsContext } from 'context';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface FormValues {
    title: string;
}

export const CreateNoteBlock = () => {
    const { setNewTag, tags } = useTagsContext();
    const { setNewNote, notes } = useNotesContext();

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = ({ title }) => {
        setNewNote({ title, id: uuidv4() });

        const value = getValues('title');
        const tagsList = value.split(' ').filter((tag) => tag.startsWith('#'));

        if (tagsList.length > 0) {
            const newTags = tagsList.map((tag) => {
                return { title: tag.trim() };
            });

            newTags.forEach((tag) => {
                setNewTag(tag);
            });
        }

        reset();
    };

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('tags', JSON.stringify(tags));
    }, [notes, tags]);

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
                type="text"
                placeholder="Create new note"
                {...register('title', {
                    required: '*title is required',
                    minLength: { value: 3, message: '*min 3 characters' },
                })}
            />
            {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
            <Button type="submit" label="Create" isPrimary />
        </Container>
    );
};
