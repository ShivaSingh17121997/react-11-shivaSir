import React, { useRef } from 'react'

export default function UseRef3() {
    const countRef = useRef(0);
    const handleIncrement = () => {

        countRef.current += 1
        console.log("Count :- ", countRef.current)

    }
    return (
        <div>
            <button onClick={handleIncrement} >Increment</button>
        </div>
    )
}
