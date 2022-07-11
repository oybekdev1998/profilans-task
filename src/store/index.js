import { configureStore } from '@reduxjs/toolkit'
import shortLinkReducer from './linkSlice'

export const store = configureStore({
  reducer: {
    link: shortLinkReducer,
  },
})