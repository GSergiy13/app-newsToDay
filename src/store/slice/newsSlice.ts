import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { INews } from '../../interfaces'

interface CounterState {
	news: INews[]
}

const initialState: CounterState = {
	news: [],
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		getNews: (state, action: PayloadAction<INews[]>) => {
			state.news = action.payload
		},
	},
})

export const { getNews } = newsSlice.actions

export default newsSlice.reducer
