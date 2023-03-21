import { IconButton } from 'components/IconButton/IconButton';
import styled from 'styled-components';

const StyledTagItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;

    padding: 2px 8px;

    color: rgb(255, 255, 255);
    background-color: rgb(35, 201, 255);

    border-radius: 10px;
`;
const TagText = styled.span`
    font-size: 32px;

    @media (max-width: 475px) {
        font-size: 24px;
    }
`;
const StyledButton = styled(IconButton)`
    width: 20px;
    height: 20px;
`;

export { StyledTagItem, TagText, StyledButton };
