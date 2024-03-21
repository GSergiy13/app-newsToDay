import NewsItem from '../NewsItem/NewsItem';
import style from './style.module.scss';

export default function NewsList ({news}) {
  return(
    <ul className={style.list}>
      {news.map((item) => {
         return <NewsItem key={item.id} item={item} />
         
      })}
    </ul>
  )
}