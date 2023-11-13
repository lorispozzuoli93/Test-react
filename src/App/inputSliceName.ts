import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface InputState {
  value: string
}

// Define the initial state using that type
const initialState: InputState = {
  value: '',
}

export const inputSliceName = createSlice({
  name: 'inputValueName',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    inputValueName: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { inputValueName } = inputSliceName.actions

export default inputSliceName.reducer