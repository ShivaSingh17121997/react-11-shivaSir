import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { authContext } from '../Contextapi/AuthContext';

export default function Home() {
    const [productData, setProudtDAta] = useState([]);
    const [prodImg, setProdImg] = useState("")
    const [category, setCategoty] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [editId, setEditId] = useState(null);

    const { logout } = useContext(authContext);


    const handleAddProd = () => {

        if (editId) {
            axios.patch(`http://localhost:8000/product/${editId}`, {
                image: prodImg,
                category: category,
                price: price,
                rating: { rate: rating }
            })
                .then((res) => {
                    console.log(res, "data updated successfully")
                    fetchData();
                })

        } else {

            axios.post(`http://localhost:8000/product`, {
                image: prodImg,
                category: category,
                price: price,
                rating: { rate: rating }
            })
                .then((res) => {
                    fetchData();
                    console.log("data Added successfully , ", res)
                })
        }

        setCategoty("")
        setPrice("")
        setProdImg("")
        setRating("")

    }


    const fetchData = () => {
        axios.get("http://localhost:8000/product")
            .then(data => {
                console.log(data.data)
                setProudtDAta(data.data)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    // delete function

    const handleDelete = (prodId) => {

        axios.delete(`http://localhost:8000/product/${prodId}`)
            .then(res => {
                console.log(res, "data deleted successfully")
                fetchData();
            })
    }

    // edit function
    const handleEdit = (item) => {
        setEditId(item.id)
        setProdImg(item.image)
        setCategoty(item.category)
        setPrice(item.price)
        setRating(item.rating.rate)

    }


    return (
        <div>
            <h1>Home</h1>
            <div>
                <button onClick={logout} >Logout</button>
            </div>
            <div>
                <input type="text" placeholder='Enter your image link' value={prodImg} onChange={(e) => setProdImg(e.target.value)} /> <br />
                <input type="text" placeholder='Enter your category' value={category} onChange={(e) => setCategoty(e.target.value)} /> <br />
                <input type="text" placeholder='Entere your Prodprice' value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
                <input type="text" placeholder='rating upto 5' value={rating} onChange={(e) => setRating(e.target.value)} /> <br />
                <button onClick={handleAddProd} > {editId ? "Update" : "Add"} </button>

            </div>

            <div>
                {
                    productData.map((item) => {
                        return <div style={{ margin: "10px", padding: "10px", border: "1px solid black" }} key={item.id}>
                            <img width="150px" src={item.image} alt="" />
                            <h1>{item.category}</h1>
                            <p>{item.price}</p>
                            <p>{item.rating.rate}</p>
                            <button onClick={() => handleDelete(item.id)} >Delete</button>
                            <button onClick={() => handleEdit(item)} >Edit</button>

                        </div>
                    })
                }
            </div>

        </div>
    )
}
