import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { added } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
function CardProduct(props) {


  let { productInfo: item } = props;
  const dispatch = useDispatch();

  return (
    <Card className='col-lg-3 col-10 col-xl-2 col-md-4 m-2 shadow-lg bg-body rounded'>
      <NavLink to={`/products/${item.id}`} >
        <Card.Img
          variant="top"
          // src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
          src={item.thumbnail}
          style={{ height: "180px" }}
          className='imgCard'
        />
      </NavLink>

      <Card.Body className='d-flex flex-row justify-content-between flex-wrap '>
        <NavLink to={`/products/${item.id}`} className='text-decoration-none text-black link-secondary'>
          <Card.Title >{item.title}</Card.Title>
        </NavLink>

        <Card.Text >
          R: {item.rating}
        </Card.Text>
      </Card.Body>
      <Card.Body className='d-flex flex-row align-items-center justify-content-between pt-0'>
        <Card.Text className='fs-5 mb-0 '>
          {item.price}$
        </Card.Text>

        <Button variant='secondary' onClick={() => dispatch(added(item))}>+🛒</Button>
      </Card.Body>
    </Card>
  );
}


export default CardProduct;