import React, { useState } from 'react'

export default function EventHandle() {
    const [input, setInput] = useState("");
    const [checkbox, setCheckbox] = useState(false);
    const [brands, setBrands] = useState("")
    console.log(checkbox)

    console.log(input)
    const handleClick = () => {
        console.log("i am clicked and i am happy!")
    }

    console.log(brands)
    // handleeing form 

    const handleForm = (e) => {
        e.preventDefault();

        console.log(input)
    }

    return (
        <div>

            {/* <button onClick={handleClick} >   Click me!</button> */}
            <form onSubmit={handleForm} >
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your name' />
                // event bubbling
                <button>Submit</button>

            </form>

            <input type="checkbox" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
            <select onChange={(e) => setBrands(e.target.value)} name="" id="">
                <option value="">Brands</option>
                <option value="zara">Zara</option>
                <option value="abibas">Abibas</option>
                <option value="nike">Nike</option>
                <option value="gucci">Gucci</option>
            </select>


        </div>
    )
}
