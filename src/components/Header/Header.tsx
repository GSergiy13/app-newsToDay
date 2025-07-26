import { themeIcons } from '../../assets/index.ts'
import { useMyContext } from '../../context/MyContext.tsx'
import { formatDate } from '../../helper/formatDate.ts'
import style from './style.module.scss'

export default function Header() {
	const { isDark, toggleTheme } = useMyContext()

	const handlerChangeTheme = () => {
		toggleTheme()
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
