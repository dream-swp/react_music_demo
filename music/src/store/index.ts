import { configureStore } from '@reduxjs/toolkit'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
    reducer: {}
})

type GetStateFnType = typeof store.getState
type AppRootState = ReturnType<GetStateFnType>
type AppDispatch = typeof store.dispatch

// useSelector / useDispatch / shallowEqual 的 hooks
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store
