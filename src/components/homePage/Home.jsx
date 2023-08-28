import React, { useEffect } from 'react'
// import Popup from '../Popup'
import Slider from './Slider'
import CardProduct from './CardProduct'
import { fetchProducts } from '../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function Home(props) {
    document.title = "Home";
    let productsData = useSelector(
        (state) => state.product
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchProducts()
        );
    }, [dispatch]);
    let { loading, productsData: { products: productData }, error } = productsData;
    // console.log(loading, productData);

    return (
        <>
            <Slider />
            {/* <Popup /> */}
            <div className='d-flex flex-row flex-wrap justify-content-center'>

                {productData && productData.map((item, index) => {
                    return <CardProduct productInfo={item} key={index} />
                })
                }


            </div>
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