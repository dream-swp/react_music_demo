import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHomeRecommend } from '../service'
import type { Banner } from '../models/banner' // 改为 import type
import type { HotRecommend } from '../models/recommend'

export const feachBannersAction = createAsyncThunk('banners', async (_, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeBannersAction(result.data.banners))
})

export const feachHotRecommend = createAsyncThunk('hotRecommend', async (_, { dispatch }) => {
    const result = await getHomeRecommend(8)
    dispatch(changeHotRecommendAction(result.data.result))
})

interface RecommendState {
    banners: Banner[]
    hotRecommend: HotRecommend[]
}

const initialState: RecommendState = {
    banners: [],
    hotRecommend: []
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommend = payload
        }
    }
})

export const { changeBannersAction, changeHotRecommendAction } = recommendSlice.actions

export default recommendSlice.reducer
