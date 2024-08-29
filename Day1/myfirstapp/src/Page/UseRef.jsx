import React, { useRef } from 'react'

export default function UseRef() {

    const textRef = useRef();

    const handleChangeColor = () => {
        if (textRef.current) {
            textRef.current.style.color = "green"
        }
    }

    return (

        <div>
            <p ref={textRef} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maiores.</p>
            <button onChange={handleChangeColor} >Change Color</button>
        </div>
    )
}
