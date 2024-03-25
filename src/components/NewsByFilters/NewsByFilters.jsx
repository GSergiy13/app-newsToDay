
import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helper/hooks/useDebounce';
import { useFetch } from '../../helper/hooks/useFetch';
import { useFilters } from '../../helper/hooks/useFilters';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList'
import PagginationWrapper from '../PagginationWrapper/PagginationWrapper';
import Pagination from '../Pagination/Pagination'
import { PAGE_SIZE, TOTAL_PAGE } from '../constants/constants';
import style from './style.module.scss'


export default function NewsByFilters() {

  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  });

const debouncedKewordsSerch = useDebounce(filters.keywords, 1000);

const {data, err, isLoading} = useFetch(getNews, {
  ...filters,
  keywords: debouncedKewordsSerch
})


  const henderlNextPage = () => {
    if(filters.currentPage < TOTAL_PAGE) {
      changeFilter('page_number', filters.currentPage + 1)
    }
  }

  const henderlPrevPage = () => {
    if(filters.currentPage > 1) {
      changeFilter('page_number', filters.currentPage - 1)
    }
  }

  const henderPageClick = (page_number) => {
    changeFilter('page_number', page_number)
  }

  return(
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

