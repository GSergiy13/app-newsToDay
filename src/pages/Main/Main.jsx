import { useEffect, useState } from 'react';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList.jsx';

import style from './style.module.scss'
import {getNews} from '../../api/apiNews.js';
import Skeleton from '../../components/Skeleton/Skeleton.jsx';

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        seIsLoading(true)
        const response = await getNews();

        setNews(response.news);

        seIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return(
    <main className={style.mian}>
      {news.length  > 0 && !isLoading ? <NewsBanner  item={news[0]}/> : <Skeleton count={1} type='banner' />}

      {
        !isLoading ? 
          <NewsList news={news} /> :
          <Skeleton count={10} type='item' />
      }
    </main>
  )
}