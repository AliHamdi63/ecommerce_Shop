import React from 'react'
import { Button, Carousel, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { added } from '../../redux/features/cart/cartSlice';

export default function ProductModal(props) {
    let { datainfo } = props;
    const dispatch = useDispatch();

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {datainfo.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-col flex-md-row flex-wrap justify-content-center col-12 ' >
                <div className=' mt-3 mb-0 col-lg-3  '>
                    <Carousel className='info-slider col-lg-12 '>
                        {datainfo.images && datainfo.images.map((item, index) => {

                            return (
                                <Carousel.Item key={index} interval={2000}>
                                    <img
                                        className="d-block info-slide-image"
                                        src={item}
                                        alt={datainfo.title}
                                    />

                                </Carousel.Item>
                            )
                        })}

                    </Carousel>
                </div>
                <div className='col-lg-6 col-12 ms-lg-4' >
                    <table className="table m-0 mt-2 mb-3">
                        <thead>
                            <tr>

                                <th scope="col">Category</th>
                                <td >{datainfo.category}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{datainfo.title}</td>

                            </tr>
                            <tr>
                                <th scope="row">Brand</th>
                                <td>{datainfo.brand}</td>

                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{datainfo.description}</td>

                            </tr>
                            <tr>
                                <th scope="row">Rating ⭐</th>
                                <td>{datainfo.rating}</td>

                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td>{datainfo.price}$</td>

                            </tr>
                            <tr>
                                <th scope="row">Stock</th>
                                <td>{datainfo.stock}</td>

                            </tr>

                        </tbody>
                    </table>
                    <Button onClick={() => dispatch(added(datainfo))} variant='secondary' className='float-end pe-5 ps-5 pt-2 pb-2'>+🛒</Button>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}
