import React, { useEffect, useState } from 'react'
// import Popup from '../Popup'
import Slider from './Slider'
import CardProduct from './CardProduct'
import { getSomeProducts } from '../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Pagination } from 'react-bootstrap';


function Home(props) {
    document.title = "Home";
    let productsData = useSelector(
        (state) => state.product
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getSomeProducts(0)
        );
    }, [dispatch]);
    let { someProducts: { products: productData } } = productsData;
    // console.log(productData && productData);
    let [active, setActive] = useState(1);

    // let active = 1;
    let items = [];
    let getData = (current, next) => {
        // console.log(current, typeof current);
        setActive(next);
        dispatch(
            getSomeProducts(current)
        );
        // console.log(productsData);
    }
    for (let number = 0; number < (productsData && productsData.someProducts.total / 20); number++) {
        items.push(
            <Pagination.Item key={number + 1} href={'#' + (number + 1)} onClick={() => getData(number * 20, number + 1)} active={(number + 1) === active} id='paginationStyle'>
                {number + 1}
            </Pagination.Item>,
        );
    }
    return (
        <>
            <Slider />
            {/* <Popup /> */}
            <Container className='mb-5 d-flex flex-column align-items-center'>

                <div className='mt-2 d-flex flex-row flex-wrap justify-content-center'>
                    {/* {console.log(productsData)} */}
                    {productData && productData.map((item, index) => {
                        return <CardProduct productInfo={item} key={index} />
                    })
                    }


                </div>
                <Pagination className='mt-5 pa'>{items}</Pagination>
            </Container>
        </>
    )
}

// let mapStateToProps = (state) => {
//     // console.log(state.ProductReducer);
//     return {
//         productData: state.ProductReducer
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//         getAllProducts: () => { dispatch(ProductsAction()) }
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;