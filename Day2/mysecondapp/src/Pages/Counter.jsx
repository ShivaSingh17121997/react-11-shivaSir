import { useEffect } from "react";
import { useState } from "react";

function Counter() {

    const [babalu, setBabalu] = useState(1)

    useEffect(() => {
        console.log("component is created")

        return () => {
            console.log('component is deleted')
        }

    }, [])

    useEffect(() => {
        console.log('compoet is updated')
    }, [babalu])

    // difference between class and functin bsed compoentn
    


    return <>
        <h1>Hello this is Counter app {babalu}</h1>
        <button onClick={() => setBabalu(babalu * 37)} >  Inc</button>
        <button disabled={babalu <= 0} onClick={() => setBabalu(babalu - 1)} >Dec</button>
        <button onClick={() => setBabalu(0)}>Reset</button>

    </>
}

export default Counter;