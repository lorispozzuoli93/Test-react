import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface InputState {
  value: string
}

// Define the initial state using that type
const initialState: InputState = {
  value: '',
}

export const inputSliceEmail = createSlice({
  name: 'inputValueEmail',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    inputValueEmail: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { inputValueEmail } = inputSliceEmail.actions

export default inputSliceEmail.reducer