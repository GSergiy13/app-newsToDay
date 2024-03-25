
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import { TOTAL_PAGE } from '../constants/constants';
import style from './style.module.scss'


export default function NewsByFilters({filters, changeFilter, isLoading, news}) {

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

      {
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={filters.page_number}
          totalPages={TOTAL_PAGE} />
      }

      <NewsList news={news} isLoading={isLoading} />

      {
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={filters.page_number}
          totalPages={TOTAL_PAGE} />
      }
    </section>
  )
}

