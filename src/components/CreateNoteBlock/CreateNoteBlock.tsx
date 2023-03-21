import { Button } from 'components';
import { Container, StyledInput, ErrorMessage } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useNotesContext, useTagsContext } from 'context';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
    title: string;
    id: string;
    hashtag: string;
}

export const CreateNoteBlock = () => {
    const { setNewTag, tags } = useTagsContext();
    // const [hashtags, setHashtags] = useState(tags);
    const { setNewNote } = useNotesContext();

    const hashtagRegex = new RegExp(/#\w+/g);

    // const [inputValue, setInputValue] = useState<string>('');
    // const hashtagRegex = new RegExp(/#\w+/g);
    // const highlightHashtags = (input: string): React.ReactNode => {
    //     return input.split(hashtagRegex).map((part, index) => {
    //         if (hashtagRegex.test(part)) {
    //             return (
    //                 <span key={index} className="highlighted-hashtag">
    //                     {part}
    //                 </span>
    //             );
    //         }
    //         return part;
    //     });
    // };

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
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
