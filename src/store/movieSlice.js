import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trending: null,
    recommends: null,
    newDisney: null,
    original: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.trending = action.payload.trending;
      state.recommends = action.payload.recommends;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectTrendings = (state) => state.movie.trending;
export const selectRecommends = (state) => state.movie.recommends;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.original;

export default movieSlice.reducer;
