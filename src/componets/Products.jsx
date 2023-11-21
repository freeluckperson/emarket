import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Products = () => {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState(null);
    const [loading, setLoading] = useState(false);

    let componenMounted = true

    useEffect(() => {
        setLoading(true)
        const getProduts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componenMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                // console.log(filter)
            }
            return () => {
                componenMounted = false
            }
        };
        getProduts()
    }, [])


    const Loading = () => {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="overflow-x-hidden">Loading...</span>
                </div>
            </>
        )
    }

    const filterProduct = cat => {
        const updateList = data.filter(product => product.category === cat)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 mx-4" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div >
                {filter?.map((product, i) => (
                    <>
                        <div className="col-md-3 mb-4" key={i}>
                            <div className="card h-100 text-center p-4" >
                                <img src={product.image} height={'250px'} className="card-img-top " alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead-fw-bold">{product.price} $</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </>

                ))}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div >
                        <h1
                            className='display-6 fw-bolder text-center'>Lastest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products