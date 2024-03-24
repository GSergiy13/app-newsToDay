import style from './style.module.scss'

import { PAGE_SIZE, TOTAL_PAGE } from '../../components/constants/constants.js';
import {getNews, getCategories} from '../../api/apiNews.js';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Search from '../../components/Search/Search.jsx';
import { useDebounce } from '../../helper/hooks/useDebounce.js';
import { useFetch } from '../../helper/hooks/useFetch.js';
import { useFilters } from '../../helper/hooks/useFilters.js';

export default function Main() {
  const {filters, changeFilter} = useFilters({
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: ''
    })

  const debouncedKewordsSerch = useDebounce(filters.keywords, 1000);

  const {data, err, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKewordsSerch
  })

  const {data: dataCategories} = useFetch(getCategories);

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
    <main className={style.main}>
      {dataCategories ? <Categories 
      categories={dataCategories.categories} 
      setSelectedCategory={(category) => changeFilter('category', category)}
      selectedCategory={filters.category} /> : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

      <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]}/> 

      {
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={filters.page_number}
          totalPages={TOTAL_PAGE} />
      }

      <NewsList news={data?.news} isLoading={isLoading} />

      {
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={filters.page_number}
          totalPages={TOTAL_PAGE} />
      }
    </main>
  )
}