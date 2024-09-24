import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const [product, setProduct] = useState([]);
    const [inputdata, setInputData] = useState("");
    const [page, setPage] = useState(1);
    const [debounceInput, setDebounceInput] = useState(inputdata);

    let totalData = 20

    // debouncing effect for the search input
    useEffect(() => {
        const handleDelay = setTimeout(() => {
            setDebounceInput(inputdata)
        }, 800);

        return () => {
            clearTimeout(handleDelay);
        }


    }, [inputdata])


    useEffect(() => {
        console.log(inputdata)
        fetch(`http://localhost:9000/products?_limit=20&q=${debounceInput}&_page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
            .catch(err => console.log("something is wrong"))

    }, [debounceInput, page])

    // sorting

    const handleLowToHigh = () => {
        const sortedData = product.sort((a, b) => a.price - b.price)
        console.log(sortedData)
        setProduct([...product], sortedData)
    }

    const handleHighToLow = () => {
        const sortedData = product.sort((a, b) => b.price - a.price)
        console.log(sortedData)
        setProduct([...product], sortedData)
    }


    return (
        <div>
            <div>
                <input type="text" value={inputdata} onChange={(e) => setInputData(e.target.value)} placeholder='Search here...' />
            </div>

            <div>
                <button onClick={handleLowToHigh} >Low to high</button>
                <button onClick={handleHighToLow} >High to low</button>
            </div>

            <br /><br />
            <div>
                <button disabled={page <= 1} onClick={() => setPage(page - 1)} >prev</button>
                <button>{page}</button>
                <button disabled={page == Math.ceil((totalData) / 3)} onClick={() => setPage(page + 1)} >next</button>
            </div>
            <div>
                {
                    product.map((item) => {
                        return <div style={{ border: "1px solid black", margin: "10px" }} key={item.id}>
                            <img width="50px" src={item.image} alt="img" />
                            <p>{item.title}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <p>{item.rating.rate}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}


// 6.89 = 7
// 6