import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let ComponentMounted = true

    useEffect(() => {
        const getProduts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (ComponentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                ComponentMounted = false
            }
        };
        getProduts()
    }, [])


    const Loading = () => {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2">ALL</button>
                    <button className="btn btn-outline-dark me-2">Men`s Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women`s Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electronic</button>
                </div>
                {/* {filter.map(Product => (
                    <>
                        <div className="col-md-3">
                            <div className="card" style="width: 18rem;">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </>

                ))} */}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className='col-12 mb-5'>
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

export default Product