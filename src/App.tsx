import Header from './components/Header/Header'
import Main from './pages/Main/Main'
import { useAppSelector } from './store'

function App() {
	const { isDark } = useAppSelector(state => state.theme)

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header />

			<div className='container'>
				<Main />
			</div>
		</div>
	)
}

export default App
