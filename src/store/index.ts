import { configureStore } from '@reduxjs/toolkit'
import siderSlice from './siderSlice'

const store = configureStore({
  reducer: {
    siderSlice: siderSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
