import { useEffect, useState } from 'react';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList.jsx';

import style from './style.module.scss'
import {getNews, getCategories} from '../../api/apiNews.js';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Search from '../../components/Search/Search.jsx';
import { useDebounce } from '../../helper/hooks/useDebounce.js';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keywords, setKeywords] = useState('');
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKewordsSerch = useDebounce(keywords, 1000);

  // News requst
  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory,
        keywords: debouncedKewordsSerch
      });

      setNews(response.news);

      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  // Category requst
  const fetchCategory = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKewordsSerch]);

  useEffect(() => {
    fetchCategory();
  }, []);

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
      <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Search keywords={keywords} setKeywords={setKeywords} />

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