import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  list: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
}
export const watchListSlicer = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToList: (state, action) => {
      const existMovie = state.list.find(
        (movie) => movie.id === action.payload.id,
      )
      if (!existMovie) {
        state.list = [...state.list, action.payload]
      } else {
        alert('this movie is already exist in your list')
      }
      localStorage.setItem('watchList', JSON.stringify(state.list))
    },
    removeFromList: (state, action) => {
      state.list = state.list.filter(
        (movie) => movie.name !== action.payload.name,
      )
    },
    filterByName: (state, action) => {
      const movieName = action.payload
      state.list = state.list.filter(
        (movie) => movie.name === movieName || movie.title === movieName,
      )
    },

    //! todo : add category to each movie in browse page
  },
})

export const {
  addToList,
  removeFromList,
  filterByName,
} = watchListSlicer.actions
export const selectList = (state) => state.watchList.list
export default watchListSlicer.reducer
