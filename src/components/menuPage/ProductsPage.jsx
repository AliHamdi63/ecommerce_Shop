import React, { useEffect, useState } from 'react'
import { getCategories, fetchAllProducts, getSearchedData } from '../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../homePage/CardProduct';
import { Button, Container, Form } from 'react-bootstrap';

function ProductsPage() {
    let productsData = useSelector(
        (state) => state.product
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchAllProducts()
        );
        dispatch(
            getCategories()
        );
    }, [dispatch]);
    let { categories, productsData: { products: productData }, searchedData: { products: searchedProduct } } = productsData;


    let [selectedCategory, setSelectedCategory] = useState();
    let [data, setData] = useState("");
    let handleData = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let Val = e.target.value;
        setData(Val);

    }
    let handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
            getSearchedData(data)
        );
        // console.log(searchedProduct, searchedProduct.length);
    }
    return (
        <>

            <Container className='d-flex flex-column align-items-center mb-5'>

                <Form className='mt-5 mb-0 d-flex flex-column flex-md-row col-sm-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 d-flex flex-sm-row flex-column " controlId="formBasicText">
                        <Form.Control type="text"
                            className='fs-6 p-2 mb-2 mb-sm-0 pe-5 me-3 w-100 col-12'
                            placeholder="Search for . . . . "
                            name='search'
                            onChange={handleData}
                        />

                        <Button onClick={handleSubmit} >Search</Button>
                    </Form.Group>
                </Form>
                <Form.Select className='categoryDropdown'
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value='all'>Select Category</option>

                    {
                        categories && categories.map((item, index) => {
                            return (
                                <option value={item} key={index}>{item}</option>
                            )
                        })}

                </Form.Select>
                <div className='d-flex flex-row flex-wrap justify-content-center col-12'>

                    {
                        selectedCategory === undefined ?

                            null :

                            productData && productData.map((item, index) => {
                                // console.log(item.category, selectedCategory);
                                if (item.category === selectedCategory) {
                                    return <CardProduct productInfo={item} key={index} />
                                }
                                else return null;
                            })

                    }
                </div>

                <div className='d-flex flex-row flex-wrap justify-content-center col-12'>

                    {
                        searchedProduct && searchedProduct.length === 0 ?

                            <h3>Not Found</h3> :

                            searchedProduct && searchedProduct.map((item, index) => {
                                return <CardProduct productInfo={item} key={index} />
                            })

                    }
                </div>
            </Container>
        </>
    )
}
export default ProductsPage;