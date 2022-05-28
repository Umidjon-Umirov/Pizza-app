import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from './slices/PizzasSlice';
import chartReducer from './slices/ChartSlice'
export default configureStore({
   reducer:{
      pizzas:pizzasReducer,
      chart:chartReducer,
   }
})