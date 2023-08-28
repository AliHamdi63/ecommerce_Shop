import { Button } from 'react-bootstrap'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function EmtyCart() {
    document.title = "Cart";

    return (
        <>
            <div className='d-flex flex-row'>
                <div className='col-1'></div>
                <div className='col-10 '>
                    <h2 className='text-black fw-bold mt-5 mb-5'>Shopping Cart</h2>
                    <div className='text-center'>
                        <p className='fa fa-shopping-basket' style={{ color: "lightgray", fontSize: "10rem" }}></p>
                        <p className='text-black fs-5 mb-5'>You have no items in your shopping cart.</p>
                        <NavLink to="/" className="text-decoration-none text-light">
                            <Button className=' btn btn-dark ps-5 pe-5 pt-2 pb-2 fw-bold fs-4' style={{ width: "70vh", marginBottom: "150px" }}>
                                Continue Shopping
                            </Button>
                        </NavLink>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </>
    )
}
