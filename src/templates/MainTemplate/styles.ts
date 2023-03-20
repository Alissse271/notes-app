import { Button } from 'components';
import styled from 'styled-components';

const StyledMainTemplate = styled.div`
    max-width: 1280px;
    width: 100%;

    margin: 0 auto;
    padding: 10px;
`;
const StyledButton = styled(Button)`
    width: 100%;
`;

export { StyledMainTemplate, StyledButton };
