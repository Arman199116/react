import React, { useState, useRef, useContext } from 'react';
import { Context } from "./Context";

const Input = () => {

    const { uniqueId, setUniqueId, dispatch} = useContext(Context);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const onAddHandler = () => {
        if (!inputValue) {
            return;
        }
        setUniqueId(uniqueId + 1);
        const toDo = {
            id: uniqueId,
            task: inputValue,
            complete: false
        };
        
        dispatch({type : "Add", todo : toDo});
        
        setInputValue('');
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} onChange={(e) => {setInputValue(e.target.value)}} />
            <button onClick={ onAddHandler }>Add</button>
        </>
    );
};

export default Input;