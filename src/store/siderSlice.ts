import { createSlice } from '@reduxjs/toolkit'

interface siderSliceType {
  openKeys: string[]
  key: string | undefined
}

const initialState: siderSliceType = {
  openKeys: [],
  key: ''
}

const siderSlice = createSlice({
  name: 'siderSlice',
  initialState: initialState,
  reducers: {
    selectKeys: (state, action: { payload: string }) => {
      state.key = action.payload
    },
    selectOpenKeys: (state, action: { payload: string[] }) => {
      state.openKeys = action.payload
    }
  }
})

export const { selectKeys, selectOpenKeys } = siderSlice.actions

export default siderSlice.reducer
