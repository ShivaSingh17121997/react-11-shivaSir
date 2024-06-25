import { useState } from "react";

// events
// event bubbling
// event loop


function Counter() {

    // state and props
    //state  //updaterfunction
    const [count, setCount] = useState(0);

    const [name, setName] = useState("");


    const handleIncrease = () => {
        setCount(count + 1)

    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }



    //fragments
    return <>
        <h1>Counter</h1>

        {/* <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg" alt="lal patti" /> */}

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />

        <h3>{name}</h3>


        <div>
            <div>
                <div>
                    <h3>Nested element</h3>
                </div>
            </div>
            <h2>Count{count}</h2>
        </div>

        <button onClick={handleIncrease} >Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset} >Reset</button>

    </>
}

export default Counter;