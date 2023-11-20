import React from 'react'
import happy from '../assets/happy.jpg'
import Product from './Products'


const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="card text-bg-dark border-0 ">
                    <img src={happy} className="card-img img-fluid" height={'550px'} alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TREDS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Product />
        </div>
    )
}

export default Home