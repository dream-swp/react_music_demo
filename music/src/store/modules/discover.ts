import { createSlice } from '@reduxjs/toolkit'

const discoverSlice = createSlice({
    name: 'discover',
    initialState: {
        name: ''
    },
    reducers: {}
})

// console.log(import.meta.env.PROD)
console.log(import.meta.env.VITE_API_URL)

export default discoverSlice.reducer
