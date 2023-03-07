import React from 'react'
import { Card, Button } from 'react-bootstrap';

function CardProduct() {
  return (
    <Card className='col-lg-2 col-md-4 m-2'>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
        style={{ height: "180px" }}
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
        <Button variant='secondary'>+🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;



// { {Array.from({ length: 2 }).map((_, idx) => (  ))}  }