import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service'
import type { Banner } from '../models/banner' // 改为 import type

interface RecommendState {
    banners: Banner[]
}

const initialState: RecommendState = {
    banners: []
}

export const feachBannersAction = createAsyncThunk('banners', async (_arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.data.banners))
})

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload
        }
    }
})

export const { changeBannersAction } = recommendSlice.actions

export default recommendSlice.reducer
