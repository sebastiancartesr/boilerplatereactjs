import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking'
  },
  reducer: {
    login: (state, action) => {

    },
    logout: (state, action) => {

    },
    checkingCredentials: (state) => {

    }
  }
})

export const { login, logout, checkingCredentials } = authSlice.actions
