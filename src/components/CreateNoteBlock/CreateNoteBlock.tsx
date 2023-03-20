import { Button, Input } from 'components';
import { Container } from './styles';

export const CreateNoteBlock = () => {
    return (
        <Container>
            <Input
                placeholder="Create new note"
                type="text"
                onChange={() => console.log('sd')}
                value={''}
            />
            <Button
                type="button"
                label="Create"
                onClick={() => console.log('sd')}
                isPrimary
            />
        </Container>
    );
};
