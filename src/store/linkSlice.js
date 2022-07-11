import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []  
}

export const counterSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    short_link: (state, action) => {
      state.value.push(action.payload);
    }
    
  },
})


export const { short_link, increment} = counterSlice.actions

export default counterSlice.reducer