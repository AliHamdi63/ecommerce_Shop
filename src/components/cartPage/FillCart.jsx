import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { added, removed } from '../../redux/features/cart/cartSlice'

function FillCart() {
    document.title = "Cart";
    const numOfItems = useSelector((state) => state.cart.numOfItems);
    const dispatch = useDispatch();
    let TotalMoney = 0;
    let TotalQuantity = 0;

    let [show, setShow] = useState(false);

    let showHide = () => {
        setShow(true)
        setTimeout(() => setShow(false), 2000)
    }


    return (
        <>
            <Container className='m-0 p-0 mb-5 d-flex flex-sm-row flex-column '>
                <Container className='m-0 p-0'>
                    {numOfItems && numOfItems.map((item, index) => {

                        TotalMoney += item.quantity * item.product.price;
                        TotalQuantity += item.quantity;
                        return (
                            <Card className='d-flex flex-lg-row flex-sm-column mt-5 mb-2 me-sm-5 ms-sm-5 ms-4 col-md-8 col-lg-11 col-10 shadow-lg bg-body rounded align-items-center justify-content-end' key={index}>
                                <Card.Body>
                                    <NavLink to={`/products/${item.product.id}`} >
                                        <Card.Img
                                            variant="top"
                                            src={item.product.thumbnail}
                                            style={{ height: "180px", width: "250px" }}
                                            className='imgCard m-2 mt-0 mb-0'
                                        />
                                    </NavLink>

                                </Card.Body>

                                <Card.Body className='d-flex flex-column justify-content-between align-items-center flex-wrap '>
                                    <NavLink to={`/products/${item.product.id}`} className='text-decoration-none text-black link-secondary'>
                                        <Card.Title >{item.product.title}</Card.Title>
                                    </NavLink>
                                    <Card.Text className='fs-5 mb-0 '>
                                        {item.product.price}$
                                    </Card.Text>

                                </Card.Body>

                                <Card.Body className='d-flex flex-column align-items-center justify-content-between pt-0'>
                                    <Card.Body className=''>
                                        <Button className='btn btn-success rounded me-4' onClick={() => dispatch(added(item.product))}>
                                            <span className='fa fa-plus' ></span>
                                        </Button>

                                        <strong>{item.quantity}</strong>

                                        <Button className='btn btn-danger rounded ms-4' onClick={() => dispatch(removed(item.product.id))}>
                                            <span className='fa fa-minus' ></span>
                                        </Button>
                                    </Card.Body>
                                    <Card.Text className='fs-5 mb-0 '>
                                        Total: {item.quantity * item.product.price}$
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        )

                    })}
                </Container>

                <Card className='col-3 h-50 mt-5 mb-3 me-sm-0 ms-sm-0 ms-4 col-md-5 col-lg-3 col-10 shadow-lg bg-body rounded'>
                    <Card.Body>
                        <h3 style={{ marginLeft: '0' }} className='mb-4'>Checkout</h3>
                        <Card.Text className='fs-5 mb-4 '>
                            Total: {TotalMoney} $
                        </Card.Text>
                        <Card.Text className='fs-5 mb-4 '>
                            Quantity: {TotalQuantity} {TotalQuantity === 1 ? "item" : "items"}
                        </Card.Text>
                        <Card.Body className='d-flex flex-row align-items-center' >

                            <Button className='btn btn-primary rounded' onClick={showHide}>
                                <span className='fw-bold' >Checkout</span>
                            </Button>
                            <Card.Text className='fs-6 fw-bold trans ' style={show ? { display: 'block' } : { display: 'none' }}>
                                <span className="fa fa-check-circle me-3 fa-sm" style={{ color: "#266d2b" }}></span>
                                Checked
                            </Card.Text>
                        </Card.Body>
                    </Card.Body>
                </Card>
            </Container >

        </>
    )
}


export default FillCart;