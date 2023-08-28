import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  productsData: [],
  error: '',
  oneProduct: {},
  isOneProductLoading: false,
  oneProductError: ''
}

// Generated pending, fullfiled and rejected action types
export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
  return axios.get('https://dummyjson.com/products')
    .then((response) => response.data)

})

export const getOneProduct = createAsyncThunk('product/getOneProduct', (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`)
    .then((response) => response.data)

});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:
  {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
      state.error = '';
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.productsData = [];
      state.error = action.error.message;
    },
    // get one Product
    [getOneProduct.pending]: (state) => {
      state.isOneProductLoading = true;
    },
    [getOneProduct.fulfilled]: (state, action) => {
      state.isOneProductLoading = false;
      state.oneProduct = action.payload;
      state.oneProductError = '';
    },
    [getOneProduct.rejected]: (state, action) => {
      state.isOneProductLoading = false;
      state.oneProductError = action.error.message;
    }
  }
})


export default productSlice.reducer
