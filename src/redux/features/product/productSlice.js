import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  productsData: [],
  error: '',

  isLoadingSome: false,
  someProducts: [],
  anError: '',

  isOneProductLoading: false,
  oneProduct: {},
  oneProductError: '',

  isCategoryLoading: false,
  categories: [],
  categoriesError: '',

  isSearchLoading: false,
  searchedData: [],
  searchError: '',
}

// Generated pending, fullfiled and rejected action types
export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', () => {
  return axios.get('https://dummyjson.com/products?limit=100&skip=0')
    .then((response) => response.data)

})

export const getSomeProducts = createAsyncThunk('product/getSomeProducts', (qty) => {
  return axios.get(`https://dummyjson.com/products?limit=20&skip=${qty}`)
    .then((response) => response.data)

})

export const getOneProduct = createAsyncThunk('product/getOneProduct', (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`)
    .then((response) => response.data)

});

export const getCategories = createAsyncThunk('product/getCategories', () => {
  return axios.get('https://dummyjson.com/products/categories')
    .then((response) => response.data)

});

export const getSearchedData = createAsyncThunk('product/searchedData  ', (data) => {
  // return axios.get(`https://dummyjson.com/products/search?q=${data}&limit=100&skip=0`)
  return axios.get(`https://dummyjson.com/products/search?q=${data}`)
    .then((response) => response.data)

});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:
  {
    // get All Products
    [fetchAllProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
      state.error = '';
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.productsData = [];
      state.error = action.error.message;
    },

    // get some Products
    [getSomeProducts.pending]: (state) => {
      state.isLoadingSome = true;
    },
    [getSomeProducts.fulfilled]: (state, action) => {
      state.isLoadingSome = false;
      state.someProducts = action.payload;
      state.anError = '';
    },
    [getSomeProducts.rejected]: (state, action) => {
      state.isLoadingSome = false;
      state.someProducts = [];
      state.anError = action.error.message;
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
    },

    // get Categories
    [getCategories.pending]: (state) => {
      state.isCategoryLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isCategoryLoading = false;
      state.categories = action.payload;
      state.categoriesError = '';
    },
    [getCategories.rejected]: (state, action) => {
      state.isCategoryLoading = false;
      state.categoriesError = action.error.message;
    },

    // get getSearchedData
    [getSearchedData.pending]: (state) => {
      state.isSearchLoading = true;
    },
    [getSearchedData.fulfilled]: (state, action) => {
      state.isSearchLoading = false;
      state.searchedData = action.payload;
      state.searchError = '';
    },
    [getSearchedData.rejected]: (state, action) => {
      state.isSearchLoading = false;
      state.searchError = action.error.message;
    },
  }
})


export default productSlice.reducer
