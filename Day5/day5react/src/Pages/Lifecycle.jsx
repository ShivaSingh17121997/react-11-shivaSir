import React, { useEffect, useState } from 'react'

export default function Lifecycle() {
    const [count, setCount] = useState(0)
    const [apidata, setApiData] = useState([]);

    // manage side effects

    useEffect(() => {
        console.log("Components is mounted")

        return () => {
            console.log("component is unmounted")
        }
    }, [])

    useEffect(() => {
        console.log("Component is updated")

    }, [count])


    // api fetch

    // promises  // pending, resolved , rejected
    // promises in js =>  ui ==> api ==> server ==> ==>pending// reslved // reject
    // fetch is build on top of promises, async await
    // fetch, async await, external library axios 


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setApiData(data)

            })
            .catch((error) => console.log("somethind is wrong , abba nahi mane"))

    }, [])

    console.log("apidata", apidata)


    return (
        <div>

            <button onClick={() => setCount(count + 1)} >Update component</button>


            <div>
                {
                    apidata.map((item) => {
                        return <>
                            <img width="100px" src={item.image} alt={item.title} />
                            <p> title: {item.title}</p>
                            <p>Price: {item.price}</p>
                        </>
                    })
                }
            </div>

        </div>
    )
}
