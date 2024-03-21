import { useEffect, useState } from 'react';

import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList.jsx';

import style from './style.module.scss'
import {getNews} from '../../api/apiNews.js';

export default function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();

        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return(
    <main className={style.mian}>
      {news.length ? <NewsBanner  item={news[0]}/> : null}

      <NewsList news={news} />
    </main>
  )
}