import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
    getArtistList,
    getBanners,
    getHomeRecommend,
    getNewAlbum,
    getPlaylistDetail
} from '../service'

import type { Banner } from '../models/top-banner'
import type { HotRecommend } from '../models/hot-recommend'
import type { Album } from '../models/new-album'
import type { Ranking } from '../models/top-ranking'
import type { Artists } from '../models/settle-artists'

export const feachRecommendDatas = createAsyncThunk('feachRecommendDatas', (_, { dispatch }) => {
    getBanners().then((result) => {
        dispatch(changeBannersAction(result.data.banners))
    })

    getHomeRecommend(8).then((result) => {
        dispatch(changeHotRecommendAction(result.data.result))
    })

    getNewAlbum().then((result) => {
        dispatch(changeNewAlbumAction(result.data.albums))
    })

    getArtistList(5).then((result) => {
        dispatch(changeSettleArtists(result.data.artists))
    })
})

export const feachPlaylistDetail = createAsyncThunk('feachPlaylistDetail', (_, { dispatch }) => {
    // 19723756 = 飙升榜， 3779629 = 新歌榜, 2884035 = 原创榜
    const ids = [19723756, 3779629, 2884035]
    const promises = ids.map((item) => getPlaylistDetail(item))
    // 保证数据顺序 19723756 -> 3779629 -> 2884035
    Promise.all(promises).then((res) => {
        const rankings = res.map((item) => item.data.playlist)
        dispatch(changeRankingsAction(rankings))
    })
})

export const feachBannersAction = createAsyncThunk('banners', async (_, { dispatch }) => {
    const result = await getBanners()
    dispatch(changeBannersAction(result.data.banners))
})

export const feachHotRecommend = createAsyncThunk('hotRecommend', async (_, { dispatch }) => {
    const result = await getHomeRecommend(8)
    dispatch(changeHotRecommendAction(result.data.result))
})

export const feachNewAlbum = createAsyncThunk('', async (_, { dispatch }) => {
    const result = await getNewAlbum()
    dispatch(changeNewAlbumAction(result.data.albums))
})

interface RecommendState {
    banners: Banner[]
    hotRecommend: HotRecommend[]
    newAlbums: Album[]
    rankings: Ranking[]
    settleArtists: Artists[]
}

const initialState: RecommendState = {
    banners: [],
    hotRecommend: [],
    newAlbums: [],
    rankings: [],
    settleArtists: []
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
        changeNewAlbumAction(state, { payload }) {
            state.newAlbums = payload
        },
        changeRankingsAction(state, { payload }) {
            state.rankings = payload
        },
        changeSettleArtists(state, { payload }) {
            state.settleArtists = payload
        }
    }
})

export const {
    changeBannersAction,
    changeHotRecommendAction,
    changeNewAlbumAction,
    changeRankingsAction,
    changeSettleArtists
} = recommendSlice.actions

export default recommendSlice.reducer
