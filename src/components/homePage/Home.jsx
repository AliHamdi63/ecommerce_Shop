import React from 'react'
// import Popup from '../Popup'
import Slider from './Slider'
import CardProduct from './CardProduct'

export default function Home() {


    return (
        <>
            <Slider />
            {/* <Popup /> */}
            <div className='d-flex flex-row flex-wrap justify-content-sm-center'>
                <CardProduct />
                <CardProduct />
                <CardProduct />

            </div>
        </>
    )
}
