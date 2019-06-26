import {useState} from 'react'

export function useToggleOpen(initialState) {
    const [isListOpen, setListOpen] = useState(initialState);

    return {isListOpen, setListOpen};
}
