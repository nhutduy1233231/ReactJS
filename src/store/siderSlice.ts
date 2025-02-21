import { createSlice } from '@reduxjs/toolkit'

interface siderSliceType {
  openKeys: string[]
  key: string | undefined
}

const initialState: siderSliceType = {
  openKeys: [],
  key: '123'
}

const siderSlice = createSlice({
  name: 'siderSlice',
  initialState: initialState,
  reducers: {
    selectKeys: (state, action: { payload: { openKeys: []; key: undefined } }) => {
      state.openKeys = action.payload.openKeys
      state.key = action.payload.key
    }
  }
})

export const { selectKeys } = siderSlice.actions

export default siderSlice.reducer
