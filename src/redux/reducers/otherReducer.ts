//rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  activeStep: 0,
  isDrawer: false,
};

const otherReducer = createSlice({
  name: 'otherReducer', //ten reducer/actioname
  initialState, //giá trị mặc định của reducer (stateDefault)
  reducers: {
    toggleOpenComparisonTable: (state, action) => {
      state.isOpenComparisonTable = action.payload;
    },
  },
});

export const { toggleOpenComparisonTable } = otherReducer.actions;

export default otherReducer.reducer;
