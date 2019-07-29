import {useState} from 'react';

export const useLanguage = ()=> {

    let isEng = true;
    const transleteArr = ['en','ru'];
    
    const getLocalize = ()=> isEng ? transleteArr[0] : transleteArr[1];
    const [state, setState] = useState(getLocalize());

    const onChange = ()=> {
        console.log(isEng, state, getLocalize());
        isEng = ( state === getLocalize() ) ? !isEng : false;
        setState(getLocalize());
    }

    return [state, onChange];
}