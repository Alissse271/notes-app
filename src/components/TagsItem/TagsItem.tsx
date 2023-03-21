import { StyledTagItem, TagText, StyledButton } from './styles';
import { closeIcon } from 'assets';
import { Tag, useTagsContext } from 'context';

interface Props {
    tag: Tag;
}

export const TagsItem = ({ tag }: Props) => {
    const { title } = tag;
    const { deleteTag } = useTagsContext();
    const handleDeleteTag = () => {
        deleteTag(title);
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
