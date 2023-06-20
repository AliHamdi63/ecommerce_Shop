import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ProductInfoAction } from "../../redux/actions/ProductInfoAction"
import { Button, Carousel } from 'react-bootstrap';


function ProductInfo(props) {

    let { id } = useParams();
    let { productInfo, getProductInfo } = props;

    // let [product, setProduct] = useState({});
    // let getProduct = async () => {
    //     let response = await axios.get(`https://dummyjson.com/products/${id}`);
    //     setProduct(response.data);
    // }

    useEffect(() => {

        getProductInfo(id);

    }, [getProductInfo])


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
                                <td scope="col">{productInfo.category}</td>
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
                    <Button variant='secondary' className='pe-5 ps-5 pt-2 pb-2'>+🛒</Button>
                </div>
            </div>
        </>
    )
}

let mapStateToProps = (state) => {

    return {
        productInfo: state.ProductInfoReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getProductInfo: (id) => { dispatch(ProductInfoAction(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);