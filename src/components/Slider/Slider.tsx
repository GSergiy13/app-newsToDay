import React, { useRef } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useMyContext } from '../../context/MyContext'
import style from './style.module.scss'

interface Props {
	children: React.ReactElement
	step?: number
}

const Slider = ({ children, step = 150 }: Props) => {
	const sliderRef = useRef<HTMLElement | null>(null)
	const { isDark } = useMyContext()

	const scrollLeft = () => {
		if (!sliderRef.current) return

		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		if (!sliderRef.current) return

		sliderRef.current.scrollLeft += step
	}

	return (
		<div className={`${style.slider} ${isDark ? style.dark : style.light} `}>
			<button onClick={scrollLeft} className={style.arrows}>
				<GrPrevious />
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button onClick={scrollRight} className={style.arrows}>
				<GrNext />
			</button>
		</div>
	)
}

export default Slider
