import React, {useRef, useImperativeHandle} from 'react';


function InputModel ({refParent}) {
    const childRef = useRef();
    useImperativeHandle(refParent, () => {
        return {
            refChild : () => {
                alert(childRef.current.value);
            }
        };
    } ,[])

    return (
        <input ref={childRef} />
    )
}

export default React.forwardRef(InputModel);