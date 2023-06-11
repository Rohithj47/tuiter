import fullTuits from "../tuits/full-tuits.json"
import { createSlice } from "@reduxjs/toolkit"
import { createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const fullTuitsSlice = createSlice({
    name: "homeTuits",
    initialState: initialState,
    reducers: {
        // deleteTuit(state, action) {
        //     const index = state
        //        .findIndex(tuit =>
        //           tuit._id === action.payload);
        //     state.splice(index, 1);
        //   },
        // addTuit(state, action) {
        //     state.push({
        //         _id: (new Date()).getTime(),
        //         userName: "NASA",
        //         tuit: action.payload,
        //         liked: false,
        //         image: "nasa.png",
        //         replies: 67,
        //         retuits: 2,
        //         likes: 25,
        //         handle: "@nasa",
        //         time: "1m"
        //     })
        // }
    },
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading= true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter((tuit) => tuit._id != payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            }
    },
})

export default fullTuitsSlice.reducer