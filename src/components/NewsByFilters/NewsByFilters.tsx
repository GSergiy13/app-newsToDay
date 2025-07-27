import { useDebounce } from '../../helper/hooks/useDebounce'
import { useFilters } from '../../helper/hooks/useFilters'
import { useGetNewsQuery } from '../../store/services/newsApi'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import PagginationWrapper from '../PagginationWrapper/PagginationWrapper'
import { PAGE_SIZE, TOTAL_PAGE } from '../constants/constants'
import style from './style.module.scss'

export default function NewsByFilters() {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywordsSearch = useDebounce(filters.keywords, 1000)

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywordsSearch,
	})

	const henderlNextPage = () => {
		if (filters.page_number < TOTAL_PAGE) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const henderlPrevPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const henderPageClick = (page_number: number) => {
		changeFilter('page_number', page_number)
	}

	return (
		<section className={style.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />

			<PagginationWrapper
				top
				bottom
				henderlNextPage={henderlNextPage}
				henderlPrevPage={henderlPrevPage}
				henderPageClick={henderPageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGE}
			>
				<NewsList news={data && data.news} isLoading={isLoading} />
			</PagginationWrapper>
		</section>
	)
}
