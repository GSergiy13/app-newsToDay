import { createSlice } from '@reduxjs/toolkit'

interface State {
	isDark: boolean
}

const initialState: State = {
	isDark: false,
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.isDark = !state.isDark
		},
	},
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
