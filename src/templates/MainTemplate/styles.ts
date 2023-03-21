import { Button, Search } from 'components';
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
const StyledSearch = styled(Search)`
    margin-top: 20px;
`;
const EmptyList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 30vh;

    margin: 40px 0;

    @media (max-width: 425px) {
        min-height: 20vh;
    }
`;
const EmptyTagsList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    margin-bottom: 40px;

    font-size: 32px;
    text-align: center;

    border: 1px solid rgb(169, 169, 169);
    border-radius: 10px;
`;
const Text = styled.p`
    font-size: 32px;

    @media (max-width: 425px) {
        font-size: 24px;
    }
`;

export {
    StyledMainTemplate,
    StyledButton,
    StyledSearch,
    EmptyList,
    Text,
    EmptyTagsList,
};
