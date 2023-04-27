import { useState, useCallback } from 'react';

export default function useTitle() {
    const [value, setTitle] = useState('Notes');

    const updateTitle = useCallback((text?: string) => {
        setTitle(text ? `${text}` : 'Notes');
    }, []);

    return { value, updateTitle };
}
