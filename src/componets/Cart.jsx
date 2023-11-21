import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const CartModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const state = useSelector(state => state.handleCart)


    return (
        <>
            <div className="btn btn-outline-dark" onClick={handleShow}>
                Open Cart {state.length}
            </div>
            <Modal show={show} onHide={handleClose} className="cart-modal">
                <div className="modal-header">
                    <h5 className="modal-title ">Shopping Cart</h5>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </div>
                <div>
                    <div className="modal-body ">
                        <div className="col-12">
                            {state.map(item => (
                                <div key={item.id} className="cart-item ">
                                    <img src={item.image} alt={item.name} className="cart-item-image" height={150} width={150} />
                                    <div className="cart-item-details row">
                                        <div className="col-md-6">
                                            <h6 className="cart-item-name">{item.name}</h6>
                                            <p className="cart-item-price">${item.price}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <button className='btn btn-outline-dark mx-2'>Add</button>
                                            <button className='btn btn-outline-dark'>Less</button>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className='btn btn-outline-dark' onClick={handleClose}>Close</div>
                </div>
            </Modal>
        </>
    );
};

export default CartModal;

