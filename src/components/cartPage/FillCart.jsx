import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { added, removed } from '../../redux/features/cart/cartSlice'

function FillCart(props) {
    document.title = "Cart";
    const numOfItems = useSelector((state) => state.cart.numOfItems);
    const dispatch = useDispatch();

    return (
        <>
            {numOfItems && numOfItems.map((item, index) => {


                return (
                    <Card className='d-flex flex-sm-row flex-column  mt-5 mb-3 me-sm-5 ms-sm-5 ms-4 col-sm-10 col-10 shadow-lg bg-body rounded' key={index}>
                        <NavLink to={`/products/${item.product.id}`} >
                            <Card.Img
                                variant="top"
                                src={item.product.thumbnail}
                                style={{ height: "180px", width: "250px" }}
                                className='imgCard m-2'
                            />
                        </NavLink>

                        <Card.Body className='d-flex flex-row justify-content-between flex-wrap '>
                            <NavLink to={`/products/${item.product.id}`} className='text-decoration-none text-black link-secondary'>
                                <Card.Title >{item.product.title}</Card.Title>
                            </NavLink>

                        </Card.Body>
                        <Card.Body className='d-flex flex-row align-items-center justify-content-between pt-0'>
                            <Card.Text className='fs-5 mb-0 '>
                                {item.product.price}$
                            </Card.Text>
                            <Card.Text className='fs-5 mb-0 '>
                                Total: {item.quantity * item.product.price}$
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button className='btn btn-success rounded me-4' onClick={() => dispatch(added(item.product))}>
                                <span className='fa fa-plus' ></span>
                            </Button>
                            {/* <Card.Text> */}
                            <strong>{item.quantity}</strong>
                            {/* </Card.Text> */}
                            <Button className='btn btn-danger rounded ms-4' onClick={() => dispatch(removed(item.product.id))}>
                                <span className='fa fa-minus' ></span>
                            </Button>
                        </Card.Body>
                    </Card>
                )

            })}
        </>
    )
}


export default FillCart;