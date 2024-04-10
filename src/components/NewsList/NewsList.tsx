import NewsItem from '../NewsItem/NewsItem';
import style from './style.module.scss';
import withSkeleton from '../../helper/hocs/withSkeleton';
import { INews } from '../../interfaces';


interface Props {
  news?: INews[] | null;
}


 function NewsList ({news} : Props) {

  return(
    <ul className={style.list}>
      {news?.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;