import { IFilters } from '../../interfaces/index.js'
import { useGetCategoriesQuery } from '../../store/services/newsApi.js'
import Categories from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import Slider from '../Slider/Slider.jsx'
import style from './style.module.scss'

interface Props {
	filters: IFilters
	changeFilter: (key: string, value: string | number | null) => void
}

export default function NewsFilters({ filters, changeFilter }: Props) {
	const { data: dataCategories } = useGetCategoriesQuery(null)

	return (
		<div className={style.filters}>
			{dataCategories ? (
				<Slider>
					<Categories
						categories={dataCategories.categories}
						setSelectedCategory={category => changeFilter('category', category)}
						selectedCategory={filters.category}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
