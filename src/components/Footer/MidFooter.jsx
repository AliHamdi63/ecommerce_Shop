import React from 'react'

export default function MidFooter() {


    return (
        <>
            <div className='col-12 col-lg-3 col-md-4 m-0 me-1 pt-2 pb-2'>
                <h3>Customer Service</h3>
                <div>
                    <ul className='list-unstyled'>
                        <li><a href='#aboutus' className='fs-5 text-decoration-none text-black link-secondary'>About Us</a></li>
                        <li><a href='#contactus' className='fs-5 text-decoration-none text-black link-secondary'>Contact Us</a></li>
                        <li><a href='#myAccount' className='fs-5 text-decoration-none text-black link-secondary'>My Account</a></li>
                        <li><a href='/search' className='fs-5 text-decoration-none text-black link-secondary'>Search</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
