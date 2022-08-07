import React, { useRef } from "react";
import InputModel from './InputModel';

const ImperativeHandle = () => {

    const inputRef = useRef();
    return (
        <>
            <InputModel refParent={inputRef} />
            <button onClick={() => inputRef.current.refChild()} >click</button>
        </>
    )
};

export default ImperativeHandle;