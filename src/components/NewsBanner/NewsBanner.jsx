import style from './style.module.scss';
import { formatTimeAgo } from "../../helper/formatTimeAgo.js";
import Image from '../Image/Image'
import withSkeleton from '../../helper/hocs/withSkeleton.jsx';


function NewsBanner ({item}) {
  return(
    <div className={style.newsbaner}>
        <Image image={item?.image} />
        <h3 className={style.title}>
          {
            item.title
          }
        </h3>

        <div className={style.extra}>
          {formatTimeAgo(item.published)} by {item.autor}
        </div> 
    </div>
  )
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;