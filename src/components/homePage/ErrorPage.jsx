import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function ErrorPage() {
    return (
        <>
            <Container fluid className='text-center mb-5'>
                <div className='p-5 mt-5 mb-2'>
                    <img src='https://azoranov.com/wp-content/themes/madara/images/404.png' />
                </div>
                <Button href='/' variant="secondary" className='pe-4 ps-4 pt-2 pb-2 fs-5'>Go Shopping Now</Button>
            </Container>
        </>
    )
}
