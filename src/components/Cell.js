import { useEffect, useState } from 'react';

export default function Cell(props) {
    const [isRight, setIsRight]=useState(true);
    const coords={x: parseInt(props.x), y: parseInt(props.y)}
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);
    const [display, setDisplay] = useState(getDisplay());

    function getDisplay() {
        if (letter) return letter;
        else return coords.x===7 && coords.y===7?"★":value;
    }

    function handleChange() {
        setDisplay(getDisplay());
    }

    function handleClick() {
        console.log("Called from Cell!");
        setIsRight(!isRight);
        setValue(isRight ? "→" : "↓");
    }

    return (<div onChange={handleChange}
            data-x={coords.x}
            data-y={coords.y}
            style={{ backgroundColor: props.color,
                width: '40px',
                height: '40px', 
                textAlign: 'center', 
                verticalAlign: 'middle' }}
            >{display}</div>
    );
}