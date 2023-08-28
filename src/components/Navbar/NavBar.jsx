import React from 'react'
import imageLogo from '../../Logos/Logo.png'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function NavBar() {

    let numOfItems = useSelector((state) => state.cart.numOfItems);

    return (
        <>
            <Navbar key={'md'} expand={'md'} className="nav">
                <Container fluid>
                    <NavLink to={`/home`} className='ms-4 me-lg-5 p-0'>
                        <img src={imageLogo} height={60} width={150} className=' p-0' alt='logo' />
                    </NavLink>


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

                            <Nav className="justify-content-end d-flex flex-sm-row flex-column align-items-sm-center align-items-start flex-grow-1 me-4">
                                <Nav.Link className='navBtn pe-4 ps-4' href="#menu"><i className="fa fa-duotone fa-search"></i></Nav.Link>

                                {/* Login & Register */}
                                {/* <Nav.Link className='navBtn me-0 d-flex flex-row align-items-center' href="#login">
                                    <span className="me-2 ">Name</span>
                                    <img className="avatar-img" src='https://www.kindpng.com/picc/m/458-4587739_thumb-image-e-commerce-hd-png-download.png' alt="avatar_img" />
                                </Nav.Link>
                                <Nav.Link className='navBtn' href="#login">Sign In 👤</Nav.Link>
                                <span className='fs-5 d-none d-md-block' >|</span> */}

                                <Nav.Link className='navBtn' href="/cart">
                                    {/* Cart 🛒 */}
                                    <span className="fa fa-shopping-basket ms-2 me-2 fs-5">
                                        <sup className='bg-danger text-light fs-7' style={{ borderRadius: "50%", padding: "3px 6px" }}>
                                            {numOfItems.length}
                                        </sup>
                                    </span>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>





        </>
    )
}
