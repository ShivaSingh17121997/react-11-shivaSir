import React, { useEffect, useRef, useState } from 'react'

export default function UseRef4() {
    const [input, setInput] = useState("");
    const prevValue = useRef();

    useEffect(() => {
        prevValue.current = input
    }, [input])

    return (
        <div>UseRef4

            <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
            <div>
                <h3>currentVAl : {input}</h3>
                <h3>prevValue : {prevValue.current}</h3>
            </div>
        </div>
    )
}
