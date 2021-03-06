import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  samples: [],
};

const samplesReducer = createSlice({
  name: 'samples',
  initialState,
  reducers: {
    addSample(state, action) {
      state.samples.push(action.payload);
    },
    removeSample(state, action) {},
  },
});

export const {addSample, removeSample} = samplesReducer.actions;
export default samplesReducer.reducer;
