export const highlightHashtags = (value: string): string => {
    const formattedValue = value
        .split(' ')
        .map((word) => {
            if (word.startsWith('#')) {
                return `<span style="color: #23c8ff;">${word}</span>`;
            }
            return word;
        })
        .join(' ');
    return formattedValue;
};
