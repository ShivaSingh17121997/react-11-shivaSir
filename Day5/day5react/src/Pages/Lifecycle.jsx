import React, { useEffect, useState } from 'react'

export default function Lifecycle() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Components is mounted")

        return () => {
            console.log("component is unmounted")
        }
    }, [])

    useEffect(() => {
        console.log("Component is updated")

    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)} >Update component</button>
        </div>
    )
}
