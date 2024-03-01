import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      if (item) {
        item.count++
        console.log(JSON.stringify(state.cartList))
      } else {
        state.cartList.push(action.payload)
        console.log(JSON.stringify(state.cartList))
      }
    },
    increCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      item.count++
    },
    decreCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      if (item.count === 0) {
        state.cartList = state.cartList.filter((item) => item.count !== 0)
      }
      item.count--
    },
    clearCart(state) {
      state.cartList = []
    },
  },
})
const {
  setFoodList,
  changeActiveIndex,
  addCart,
  increCount,
  decreCount,
  clearCart,
} = foodsStore.actions
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway")
    dispatch(setFoodList(res.data))
  }
}

export {
  fetchFoodsList,
  changeActiveIndex,
  addCart,
  increCount,
  decreCount,
  clearCart,
}
const reducer = foodsStore.reducer
export default reducer
