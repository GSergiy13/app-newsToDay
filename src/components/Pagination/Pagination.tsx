import { GrNext, GrPrevious } from 'react-icons/gr'
import { useMyContext } from '../../context/MyContext'
import { IPaginationProps } from '../../interfaces'
import style from './style.module.scss'

export default function Pagination({
	totalPages,
	henderlNextPage,
	henderlPrevPage,
	henderPageClick,
	currentPage,
}: IPaginationProps) {
	const { isDark } = useMyContext()

	return (
		<div className={`${style.pagination} ${isDark ? style.dark : style.light}`}>
			<button
				disabled={currentPage <= 1}
				onClick={henderlPrevPage}
				className={style.arrow}
			>
				<GrPrevious />
			</button>

			<div className={style.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => henderPageClick(index + 1)}
							disabled={index + 1 == currentPage}
							key={index}
							className={style.pageNumber}
						>
							{index + 1}
						</button>
					)
				})}
			</div>

			<button
				disabled={currentPage >= 9}
				onClick={henderlNextPage}
				className={style.arrow}
			>
				<GrNext />
			</button>
		</div>
	)
}
