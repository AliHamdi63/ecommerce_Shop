import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { added } from '../../redux/features/cart/cartSlice';
import { Button, Carousel } from 'react-bootstrap';
import { getOneProduct } from '../../redux/features/product/productSlice';

function ProductInfo() {
    let { id } = useParams();
    const state = useSelector(state => state);
    const productInfo = state.product.oneProduct;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id])
    document.title = productInfo.title;
    // console.log(productInfo);
    return (
        <>
            <div className='d-flex flex-row flex-sm-col flex-wrap justify-content-center'>
                <div className='m-3 mt-5 mb-5 '>
                    <Carousel className='info-slider'>
                        {productInfo.images && productInfo.images.map((item, index) => {

                            return (
                                <Carousel.Item key={index} interval={2000}>
                                    <img
                                        className="d-block info-slide-image"
                                        src={item}
                                        alt={productInfo.title}
                                    />

                                </Carousel.Item>
                            )
                        })}

                    </Carousel>
                </div>
                <div>
                    <table className="table m-0 mt-5 mb-5">
                        <thead>
                            <tr>

                                <th scope="col">Category</th>
                                <td>{productInfo.category}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{productInfo.title}</td>

                            </tr>
                            <tr>
                                <th scope="row">Brand</th>
                                <td>{productInfo.brand}</td>

                            </tr>
                            <tr>
                                <th scope="row">Description</th>
                                <td>{productInfo.description}</td>

                            </tr>
                            <tr>
                                <th scope="row">Rating ⭐</th>
                                <td>{productInfo.rating}</td>

                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td>{productInfo.price}$</td>

                            </tr>
                            <tr>
                                <th scope="row">Stock</th>
                                <td>{productInfo.stock}</td>

                            </tr>

                        </tbody>
                    </table>
                    <Button onClick={() => dispatch(added(productInfo))} variant='secondary' className='pe-5 ps-5 pt-2 pb-2'>+🛒</Button>
                </div>
            </div>
        </>
    )
}

export default ProductInfo;