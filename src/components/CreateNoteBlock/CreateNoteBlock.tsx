import { Button } from 'components';
import { Container, StyledInput, ErrorMessage } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useNotesContext } from 'context';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormValues {
    title: string;
    id: string;
}

export const CreateNoteBlock = () => {
    const { setNewNote } = useNotesContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = ({ title }) => {
        setNewNote({ title, id: uuidv4() });
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
