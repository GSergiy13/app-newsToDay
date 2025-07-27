import { useDispatch } from 'react-redux'
import { themeIcons } from '../../assets/index.ts'
import { formatDate } from '../../helper/formatDate.ts'
import { useAppSelector } from '../../store/index.ts'
import { toggleTheme } from '../../store/slice/themeSlice.ts'
import style from './style.module.scss'

export default function Header() {
	const dispatch = useDispatch()
	const { isDark } = useAppSelector(state => state.theme)

	const handlerChangeTheme = () => {
		dispatch(toggleTheme())
	}

	return (
		<header className={`${style.header} ${isDark ? style.dark : style.light}`}>
			<div>
				<h1 className={style.logo_text}>NewsToDay</h1>

				<div className={style.date}>{formatDate(new Date())}</div>
			</div>

			<button className={style.themeSubmit} onClick={handlerChangeTheme}>
				<img
					src={isDark ? themeIcons.light : themeIcons.dark}
					width={30}
					height={30}
					alt='theme icon'
				/>
			</button>
		</header>
	)
}
