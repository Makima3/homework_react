import {createSlice} from "@reduxjs/toolkit";

let initialState ={
    cars: []
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState
})