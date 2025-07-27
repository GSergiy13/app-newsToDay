import { useAppSelector } from '../../store'
import style from './style.module.scss'

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}

export default function Search({ keywords, setKeywords }: Props) {
	const { isDark } = useAppSelector(state => state.theme)
	return (
		<div className={`${style.search} ${isDark ? style.dark : style.light}`}>
			<input
				className={style.input}
				type='text'
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				placeholder='Ukrain War, politic, trump...'
			/>
		</div>
	)
}
