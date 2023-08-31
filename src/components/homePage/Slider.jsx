import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SliderContent from './imageSlider.js'
import { Button } from 'react-bootstrap';
function Slider() {

    return (
        <Carousel className='mb-4'>
            {SliderContent.map((item, index) => {

                return (
                    <Carousel.Item key={index} interval={2000}>
                        <img
                            className="d-block slide-image"
                            src={item.url}
                            alt={item.title}
                        />
                        <Carousel.Caption>
                            {/* <h3>{item.title}</h3> */}
                            {/* <p>{item.description}</p> */}
                            <Button href='/search' variant="secondary" className='pe-4 ps-4 pt-2 pb-2 fs-5'>Go Shopping Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}

export default Slider;