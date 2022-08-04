import React, {useState, useEffect, useRef} from 'react';

const Header = () => {
    
    const [color, setColor] = useState('#00ffff');
    const inputColorRef = useRef();
    const headerRef = useRef();
    const colorValue = () => {
        setColor(inputColorRef.current.value);
    };
    
    useEffect(
        () => {
            headerRef.current.style.background = color;
        },
        [color]
    )
    return (
        <header ref={headerRef} >
            <h1>To Do List</h1>
            <input type={"color"} ref={inputColorRef} onChange={colorValue} value={color} />
        </header>
    )
};

export default Header;