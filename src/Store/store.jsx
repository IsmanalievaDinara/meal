import {configureStore} from '@reduxjs/toolkit'
import recipiesSlice from '../components/HomeSlice'

const store =  configureStore({
    reducer:{
        recipes:recipiesSlice.reducer
    }
})

export default store

