import React, { useEffect } from 'react'
import './SingleCompo.css'
import { useParams } from 'react-router-dom'

const SingleCompo = () => {

    const {id} = useParams()

    const url = `http://127.0.0.1:8000/api/products/update/${id}/`
    
    const [product, setProduct] = React.useState({})

    const handleEachProduct = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json()
        console.log(data);
        setProduct(data)
    }


    useEffect(()=>{
        handleEachProduct()
    },[])

  return (
    <div className='singleCompo'>

        <div className='imageDIvSIngle'>
            <img src={product.image} alt="" />
        </div>

        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default SingleCompo
