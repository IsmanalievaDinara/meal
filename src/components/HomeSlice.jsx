import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const callToAPI = createAsyncThunk('api/recipies',async(obj,{state,error})=>{
    try{
          const req = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
          const res = await req.json()
          return res.meals
    }catch(error){
        console.log(error)
        return []
    }
})

const recipiesSlice = createSlice({
    name:"recipies",
    initialState:[],
    reducers:{},
    extraReducers:{
        [callToAPI.pending]:(state,action)=>{
            return []
        },
        [callToAPI.fulfilled]:(state,action)=>{
            return action.payload
        },
        [callToAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = recipiesSlice.actions;
export default recipiesSlice ;
