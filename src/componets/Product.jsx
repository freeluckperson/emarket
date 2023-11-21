import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'




const Product = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams()


    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
                console.log(data);
            })
            .catch(error => { throw new Error(error.message) });
    }, [id]);

    const Loading = () => {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="overflow-x-hidden">Loading...</span>
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt="..." height={'400px'} width={'400px'} />
                </div>
                <div className="col-md-6">
                    <h4 className='text-text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className="diplay-5 ">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating?.rate}
                        <i className='fa fa-star ms-2'></i>
                    </p>
                    <h3 className='display-6 fw-bolder my-4'>{product.price} $</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark mx-2'>Add To Card</button>
                    <Link className='btn btn-outline-dark ' to='/cart'>Go To Card</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-5" >
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product