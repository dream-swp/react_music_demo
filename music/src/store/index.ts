import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import discoverSlice from './modules/discover'
import recommendSlice from '@/views/discover/c-views/recommend/store'

const store = configureStore({
    reducer: {
        discover: discoverSlice,
        recommend: recommendSlice
    }
})

type GetStateFnType = typeof store.getState
type AppRootState = ReturnType<GetStateFnType>
type AppDispatch = typeof store.dispatch

// useSelector / useDispatch / shallowEqual 的 hooks
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store
