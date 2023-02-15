import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function TopFooter() {


    return (
        <>
            <Container fluid className='bg-secondary mt-3 pt-3 pb-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-evenly align-items-center'>
                <Container className='m-0 ms-4'>
                    <h3>We're Always Here To Help</h3>
                    <p>Reach out to us through any of these support channels</p>
                </Container>
                <Button href='#menu' variant="dark" className='me-4 pe-4 ps-4 pt-2 pb-2 fs-5'>Go Shopping</Button>
            </Container>
        </>
    )
}
