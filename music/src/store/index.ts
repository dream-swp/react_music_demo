import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import discoverSlice from './modules/discover'

const store = configureStore({
    reducer: {
        discover: discoverSlice
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
