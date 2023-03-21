import { TagsItem } from 'components';
import { Tag } from 'context';
import { StyledTagsList } from './styles';

interface Props {
    tags: Tag[];
}

export const TagsList = ({ tags }: Props) => {
    return (
        <StyledTagsList>
            {tags.map((tag) => {
                return <TagsItem tag={tag} key={tag.title} />;
            })}
        </StyledTagsList>
    );
};
