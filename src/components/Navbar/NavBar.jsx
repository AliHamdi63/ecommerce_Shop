import React from 'react'
import imageLogo from '../../Logos/Logo.png'
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'


export default function NavBar() {


    return (
        <>
            <Navbar key={'md'} expand={'md'} className="nav mb-3">
                <Container fluid>
                    <Navbar.Brand href="#" className='ms-4 me-lg-5 p-0'>
                        <img src={imageLogo} height={60} width={150} className=' p-0' alt='logo' />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} className='Togglecanvas' />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'md'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                                Options
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="What are you looking for?"
                                    className="searchInput"
                                    aria-label="Search"
                                />
                            </Form>

                            <Nav className="justify-content-end flex-grow-1 me-4">
                                <Nav.Link className='navBtn' href="#login">Sign In 👤</Nav.Link>
                                <span className='mt-2 fs-5 d-none d-md-block' >|</span>
                                <Nav.Link className='navBtn' href="#Cart">Cart 🛒</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    )
}
