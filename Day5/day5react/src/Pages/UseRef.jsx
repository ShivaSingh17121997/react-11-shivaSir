import React, { useRef } from 'react'

export default function UseRef() {

    const textRef = useRef(null);

    const handleChangeColor = () => {
        if (textRef.current) {
            textRef.current.style.color = "green"
        }
    }


    console.log(textRef)
    return (

        <div>
            <p ref={textRef} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, maiores.</p>
            <button onClick={handleChangeColor} >Change Color</button>
        </div>
    )
}
