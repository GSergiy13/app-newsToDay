import style from './style.module.scss';
import { formatTimeAgo } from "../../helper/formatTimeAgo.ts";
import Image from '../Image/Image';
import { INews } from '../../interfaces/index.ts';

interface Props {
  item: INews;
}

function NewsBanner ({item} : Props) {
  return(
    <div className={style.newsbaner}>
        <Image image={item?.image} />
        <h3 className={style.title}>
          {
            item.title
          }
        </h3>

        <div className={style.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </div> 
    </div>
  )
}

export default NewsBanner;