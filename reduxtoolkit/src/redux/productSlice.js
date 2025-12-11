import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const res = await fetch("https://dummyjson.com/products")
    const jsonres  = await res.json()

    return jsonres.products
}) 

const initialState = {
    items: [], 
    status : undefined, 
    error : null

}

const productSlice = createSlice({
    name: 'productSlice',
    initialState, 
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded',
            state.items = action.payload

        })
    }
})

export default productSlice.reducer