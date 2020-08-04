import {configureStore} from '@reduxjs/toolkit';
import samplesReducer from './samples';

export default configureStore({
  reducer: {
    samples: samplesReducer,
  },
});
