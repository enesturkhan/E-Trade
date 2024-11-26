import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slice/AppSlice.jsx'
import productReducer from '../redux/slice/ProductSlice.jsx'
import basketReducer from '../redux/slice/BasketSlice.jsx'
 

const store = configureStore({
  reducer: {
    app: appReducer,
     product: productReducer,
    basket: basketReducer

  },
 })

export default store;