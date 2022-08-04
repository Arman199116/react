import React, {useState, useEffect, useRef, useMemo} from 'react';

const colors = {
    cyan : "cyan",
    blue : "blue",
    green : "green"
}

const Header = () => {
    
    const [color, setColor] = useState(colors.cyan);
    const selectRef = useRef();
    const colorValue = (e) => {
        setColor(e.target.value);
    }
    
    useEffect(
        () => {
           document.getElementsByClassName('selectHeader')[0].style.background = selectRef.current.value;
        },
        [color]
    )
    return (
        <header className={"selectHeader"} >
            <h1>To Do List</h1>
            <select  ref={selectRef} onChange={colorValue}>
                {Object.entries(colors).map(([name, value]) => (
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </header>
    )
};

export default Header;