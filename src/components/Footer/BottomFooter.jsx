import React from 'react'

export default function BottomFooter() {
    let date = new Date();


    return (
        <div className='text-center pb-3'>
            <h5 >Copyright © {date.getFullYear()} All Rights Reserved</h5>
        </div>
    )
}
