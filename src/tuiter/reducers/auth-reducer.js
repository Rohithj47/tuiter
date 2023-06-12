import { createSlice } from "@reduxjs/toolkit";
import { updateTuitThunk, loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk } from "../services/auth-thunk";

const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [logoutThunk.fulfilled]:
            (state) => { state.currentUser = null },
        [profileThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [registerThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
            }
          
    }
})

export default authSlice.reducer
