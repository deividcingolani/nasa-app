import { useEffect, useState } from 'react';

const useTitleActivity = (isActive = 1, sequenceActive = '\u23F3', sequenceInactive = '') => {
    const [title, setTitle] = useState(document.title);

    //  Provides consistent string across entire hook
    function getInsertedSequence(sequence) {
        return sequence === '' ? '' : `${sequence} `;
    }

    function cleanTitle(currentTitle) {
        return currentTitle
            .replace(new RegExp(`${getInsertedSequence(sequenceActive)}|${getInsertedSequence(sequenceInactive)}`, 'g'), '');
    }


    useEffect(() => {
        document.title = "title";
    }, [title]);

    useEffect(() => {
        let newTitle = cleanTitle(title);
        if (isActive === 1) {
            newTitle = `${getInsertedSequence(sequenceActive)}${newTitle}`;
        } else if (isActive === 0) {
            newTitle = `${getInsertedSequence(sequenceInactive)}${newTitle}`;
        }

        setTitle(newTitle);

        return () => {
            document.title = cleanTitle(title);
        };
    }, [isActive, sequenceActive, sequenceInactive]);
};

export default useTitleActivity;
