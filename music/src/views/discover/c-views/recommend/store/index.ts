import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHomeRecommend, getNewAlbum } from '../service'
import type { Banner } from '../models/banner' // 改为 import type
import type { HotRecommend } from '../models/recommend'
import type { Album } from '../models/new-album'

export const feachBannersAction = createAsyncThunk('banners', async (_, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeBannersAction(result.data.banners))
})

export const feachHotRecommend = createAsyncThunk('hotRecommend', async (_, { dispatch }) => {
    const result = await getHomeRecommend(8)
    dispatch(changeHotRecommendAction(result.data.result))
})

export const feachNewAlbum = createAsyncThunk('', async (_, {dispatch}) => {
    const result = await getNewAlbum(10) 
    dispatch(changeNewAlbumAction(result.data.albums))
})

interface RecommendState {
    banners: Banner[]
    hotRecommend: HotRecommend[]
    newAlbum: Album[]
}

const initialState: RecommendState = {
    banners: [],
    hotRecommend: [],
    newAlbum: []
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
        },
        changeNewAlbumAction(state, { payload}) {
            state.newAlbum = payload
        }
    }
})

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } = recommendSlice.actions

export default recommendSlice.reducer
