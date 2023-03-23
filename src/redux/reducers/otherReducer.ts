//rxslice
import { createSlice } from '@reduxjs/toolkit';
import { TOtherState } from '../../typescript';

const initialState: TOtherState = {
  data: {
    foodList: [],
    blogList: [],
  },
  foodList: [],
  loadNumberList: [],
};

const otherReducer = createSlice({
  name: 'otherReducer',
  initialState,
  reducers: {
    storageDataAction: (state, action) => {
      state.data = action.payload;
      state.foodList = action.payload.foodList;
    },
    filterFoodListAction: (state, action) => {
      state.data.foodList = state.foodList;
      state.data.foodList = state.data.foodList.filter(
        (food) => food.id === action.payload
      );
    },
    addNumberListAction: (state, action) => {
      if (state.loadNumberList.length > 1) return;
      if (state.loadNumberList.length > 0) {
        state.loadNumberList = [...state.loadNumberList, ++action.payload];
      }
      state.loadNumberList = [...state.loadNumberList, action.payload];
    },
  },
});

export const { storageDataAction, filterFoodListAction, addNumberListAction } =
  otherReducer.actions;

export default otherReducer.reducer;
