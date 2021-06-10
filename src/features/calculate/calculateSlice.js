import { createSlice } from '@reduxjs/toolkit';

export const calculateSlice = createSlice({
  name: "calculate",
  initialState: {
  },
  reducers: {
    twoVars(state, action) {
      const abrv = action.payload.abrv;
      state[abrv] = action.payload.varOne / action.payload.varTwo
    },
    threeVars(state, action) {
      const abrv = action.payload.abrv;
      state[abrv] = (parseFloat(action.payload.varOne) + parseFloat(action.payload.varThree)) / action.payload.varTwo
    },
  }
})

export const { twoVars, threeVars } = calculateSlice.actions

export default calculateSlice.reducer
