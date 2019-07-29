import {useState} from 'react';

export const useLanguage = ()=> {

    let isEng = true;
    const transleteArr = ['en','ru'];
    
    const getLocalize = ()=> isEng ? transleteArr[0] : transleteArr[1];


    const [state, setState] = useState(getLocalize());
    const onChange = ()=> {
        isEng = !isEng;
        console.log(isEng, getLocalize(), state);
        let value = (state !== getLocalize()) ? getLocalize() : state;
        setState(value);
    }

    return [state, onChange];
}