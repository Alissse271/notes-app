import { StyledTagItem, TagText, StyledButton } from './styles';
import { closeIcon } from 'assets';
import { Tag, useTagsContext } from 'context';

interface Props {
    tag: Tag;
}

export const TagsItem = ({ tag }: Props) => {
    const { title } = tag;
    const { deleteTag, tags } = useTagsContext();

    const handleDeleteTag = () => {
        deleteTag(title);
        localStorage.setItem('tags', JSON.stringify(tags));
    };
    return (
        <StyledTagItem>
            <TagText>{title}</TagText>
            <StyledButton
                type="button"
                onClick={handleDeleteTag}
                iconSrc={closeIcon}
            />
        </StyledTagItem>
    );
};
