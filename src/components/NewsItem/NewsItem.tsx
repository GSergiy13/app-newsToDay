import style from './style.module.scss';

import { formatTimeAgo } from '../../helper/formatTimeAgo';
import { INews } from '../../interfaces';


interface Props {
  item: INews;
}

export default function NewsItem ({item} : Props) {
  return(
    <li className={style.item}>
      <div className={style.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
      
      <div className={style.info}>
        <h3 className={style.title}>
            {
              item.title
            }
          </h3>

          <div className={style.extra}>
            {formatTimeAgo(item.published)} by {item.author}
          </div> 
      </div>
    </li>
  )
}


