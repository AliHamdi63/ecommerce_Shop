import React from 'react'
import { Container } from 'react-bootstrap'
import TopFooter from './TopFooter'
import LeftFooter from './LeftFooter'
import MidFooter from './MidFooter'
import RightFooter from './RightFooter'
import RightFooter2 from './RightFooter2'
import BottomFooter from './BottomFooter'

export default function Footer() {


    return (
        <>
            <Container fluid className='p-0'>
                <TopFooter />
                <Container fluid className='footer col-12 '>
                    <Container fluid className='d-flex flex-wrap'>
                        <LeftFooter />
                        <MidFooter />
                        <RightFooter />
                        <RightFooter2 />
                    </Container>
                    <BottomFooter />
                </Container>
            </Container>

        </>
    )
}
