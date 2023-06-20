import React, { useEffect } from 'react'
// import Popup from '../Popup'
import Slider from './Slider'
import CardProduct from './CardProduct'
import { ProductsAction } from '../../redux/actions/ProductsAction'
import { connect } from 'react-redux'


function Home(props) {
    let {
        productData: { products: productsData },
        getAllProducts
    } = props;


    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);


    return (
        <>
            <Slider />
            {/* <Popup /> */}
            <div className='d-flex flex-row flex-wrap justify-content-center'>

                {productsData && productsData.map((item, index) => {

                    return <CardProduct productData={item} key={index} />
                })
                }


            </div>
        </>
    )
}

let mapStateToProps = (state) => {
    // console.log(state.ProductReducer);
    return {
        productData: state.ProductReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => { dispatch(ProductsAction()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);