import React from 'react'
import { useState } from 'react'

export default function Home() {
    const [input, setInput] = useState("");
    const [category, setCategory] = useState("")
    const [check, setChecked] = useState(false);
    const [radio, setRadio] = useState("");
    console.log(radio)





    // multiple values in one useState hook

    const [formData, setFormdata] = useState({ email: "", name: "", age: "" })

    // console.log(formData)




    const handleClick = (id) => {
        console.log("i am clicked!", id)
    }

    // console.log(input)
    // console.log(category)

    // console.log(check)


    const handleSubmitForm = (e) => {
        e.preventDefault();

        console.log(formData)

        setFormdata({ email: "", name: "", age: "" })
    }



    // conditional rendering 
    // let fruit = "orange"

    // if (fruit === "banana") {
    //     console.log("color yellow")
    // } if (fruit === "apple") {
    //     console.log("color red")
    // } else if (fruit === "orange") {
    //     console.log("color orange")
    // }



    return (
        <>

            <button onClick={() => handleClick("id:4")} >Click me!</button>

            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='i am input ' />
            <select onChange={(e) => setCategory(e.target.value)}  >

                <option value="">Category</option>
                <option value="shoes">Shoes</option>
                <option value="shirt">Shirt</option>
                <option value="purse">Purse</option>
            </select>
            <input checked={check} type="checkbox" onChange={(e) => setChecked(e.target.checked)} />






            <input type="radio" name='radio' value="boys" onChange={(e) => setRadio(e.target.value)} />

            <input type="radio" name='radio' value="girls" onChange={(e) => setRadio(e.target.value)} />












            <br />        <br />
            <br />
            <br />
            <br />
            <br />






            <form onSubmit={handleSubmitForm} >

                <input value={formData.email} onChange={(e) => setFormdata({ ...formData, email: e.target.value })} type="text" placeholder='Enter email ' />         <br /><br />

                <input value={formData.name} onChange={(e) => setFormdata({ ...formData, name: e.target.value })} type="text" placeholder='Enter name' />        <br /> <br />

                <input value={formData.age} onChange={(e) => setFormdata({ ...formData, age: e.target.value })} type="text" placeholder='Enter age ' />           <br /><br />

                <button>Submit</button>
            </form>


        </>
    )
}
