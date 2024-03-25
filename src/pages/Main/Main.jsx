import style from './style.module.scss'

import { PAGE_SIZE} from '../../components/constants/constants.js';
import {getNews} from '../../api/apiNews.js';
import { useDebounce } from '../../helper/hooks/useDebounce.js';
import { useFetch } from '../../helper/hooks/useFetch.js';
import { useFilters } from '../../helper/hooks/useFilters.js';
import LastNews from '../../components/LastNews/LastNews.jsx';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx';

export default function Main() {
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

  return(
    <main className={style.main}>
      <LastNews banners={data && data.news} isLoading={isLoading} />

      <NewsByFilters filters={filters} changeFilter={changeFilter} isLoading={isLoading} news={data && data.news} />
    </main>
  )
}