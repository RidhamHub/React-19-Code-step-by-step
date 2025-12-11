import { createSlice } from "@reduxjs/toolkit"
// import { AddItem } from "./action"

// const initialState = {
//     value: 0,
//     loading: false,
//     error: null
// }

const initialState = {
    items : localStorage.getItem('cart')  ? JSON.parse(localStorage.getItem('cart')) : []
}

const addtoCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state , action) => {
            // state.value += 1
            console.log(action.payload)
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))

        },


        removeItem: (state , action) => {
            const cartData  = state.items.filter(item => item.id != action.payload.id )
            state.items = cartData
            localStorage.setItem('cart' , JSON.stringify(cartData))
        },


        clearAllItem: (state) => {
            state.items = []
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(AddItem.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(AddItem.fulfullied, (state, { payload }) => {
    //             state.loading = false;
    //             state.value = payload;
    //         })
    //         .addCase(AddItem.rejected, (state, { payload }) => {
    //             state.loading = false;
    //             state.error = payload;
    //         })

    // }
})


export const { addItem, removeItem, clearAllItem } = addtoCart.actions

export default addtoCart.reducer