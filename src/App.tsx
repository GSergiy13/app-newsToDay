import Header from './components/Header/Header'
import { useMyContext } from './context/MyContext'
import Main from './pages/Main/Main'

function App() {
	const { isDark } = useMyContext()

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
