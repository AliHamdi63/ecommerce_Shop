import React from 'react'
import { Container } from 'react-bootstrap'

export default function LeftFooter() {


    return (
        <>
            <Container fluid className='col-12 col-lg-3 col-md-4 m-0 me-1 me-md-5 p-0 pt-2 pb-2'>
                <h3>Contact Info</h3>
                <div className='mb-2'>
                    <a href="tel:+201225378854" target='_blank' rel="noreferrer" className='col-xl-7 d-flex flex-row align-items-center text-decoration-none text-black link-secondary'>
                        <span className="social fa-stack fa-lg me-3">
                            <i className="fa fa-circle-thin fa-stack-2x"></i>
                            <i className="fa fa-phone fa-stack-1x"></i>
                        </span>
                        <div>
                            <h5 className='text-secondary'>Phone Support</h5>
                            <h4 className='fs-6'>+201225378854</h4>
                        </div>
                    </a>
                </div>
                <div className='mb-2'>
                    <a href="mailto:aawere1233@gmail.com" target='_blank' rel="noreferrer" className='col-xl-8 d-flex flex-row align-items-center text-decoration-none text-black link-secondary'>
                        <span className="social fa-stack fa-lg me-3">
                            <i className="fa fa-circle-thin fa-stack-2x"></i>
                            <i className="fa fa-envelope fa-stack-1x"></i>
                        </span>
                        <div>
                            <h5 className='text-secondary'>Mail Support</h5>
                            <h4 className='fs-6'>aawere1233@gmail.com</h4>
                        </div>
                    </a>
                </div>

                <div className='d-flex flex-row'>
                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" className='text-black'>
                        <span className="social fa-stack fa-lg me-3">
                            <i className="fa fa-circle-thin fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer" className='text-black'>
                        <span className="social fa-stack fa-lg me-3">
                            <i className="fa fa-circle-thin fa-stack-2x"></i>
                            <i className="fa fa-twitter fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href='https://www.linkedin.com/in/ali-hamdi8/' target='_blank' rel="noreferrer" className='text-black'>
                        <span className="social fa-stack fa-lg">
                            <i className="fa fa-circle-thin fa-stack-2x"></i>
                            <i className="fa fa-linkedin fa-stack-1x"></i>
                        </span>
                    </a>
                </div>
                <div>
                    <img src='https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/footer/shop2_payment_logo.png' alt='payment' className='mt-3 mb-3 ' />
                </div>
            </Container>
        </>
    )
}
