import { useEffect, useState } from 'react';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList.jsx';

import style from './style.module.scss'
import {getNews} from '../../api/apiNews.js';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

console.log(currentPage);

  const fetchNews = async (currentPage) => {
    try {
      seIsLoading(true)
      const response = await getNews(currentPage, pageSize);

      setNews(response.news);

      seIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const henderlNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const henderlPrevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const henderPageClick = (page_number) => {
      setCurrentPage(page_number)
  }

  return(
    <main className={style.main}>
      {news.length  > 0 && !isLoading ? <NewsBanner  item={news[0]}/> : <Skeleton count={1} type='banner' />}

      {
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={currentPage}
          totalPages={totalPages} />
      }

      {
        !isLoading ? 
          <NewsList news={news} /> :
          <Skeleton count={10} type='item' />
      }

{
        <Pagination 
          henderlNextPage={henderlNextPage}
          henderlPrevPage={henderlPrevPage}
          henderPageClick={henderPageClick}
          currentPage={currentPage}
          totalPages={totalPages} />
      }
    </main>
  )
}