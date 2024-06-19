import { useState } from "react";




function Counter() {

    const [babalu, setBabalu] = useState(1)


    return <>
        <h1>Hello this is Counter app {babalu}</h1>
        <button onClick={() => setBabalu(babalu * 37)} >  Inc</button>
        <button disabled={babalu <= 0} onClick={() => setBabalu(babalu - 1)} >Dec</button>
        <button onClick={() => setBabalu(0)}>Reset</button>

    </>
}

export default Counter;