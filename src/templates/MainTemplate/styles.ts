import { Button } from 'components';
import styled from 'styled-components';

const StyledMainTemplate = styled.div`
    max-width: 1280px;
    width: 100%;

    margin: 0 auto;
    padding: 20px 10px;
`;
const StyledButton = styled(Button)`
    width: 100%;
`;
const EmptyList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 30vh;
    max-height: 70vh;

    margin: 40px 0;
`;
const Text = styled.p`
    font-size: 32px;

    @media (max-width: 425px) {
        font-size: 24px;
    }
`;

export { StyledMainTemplate, StyledButton, EmptyList, Text };
