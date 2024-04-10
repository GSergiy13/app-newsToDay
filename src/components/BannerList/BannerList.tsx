import style from './style.module.scss';
import withSkeleton from '../../helper/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import { INews } from '../../interfaces';

interface Props {
  banners?: INews[] | null;
}

function BannerList ({banners} : Props) {
  return(
    <ul className={style.banners}>
      {
        banners?.map(banner => {
          return (
            <NewsBanner key={banner.id} item={banner} />
          )
        })
      }
    </ul>
  )
}

const BannerListWithSkeleton = withSkeleton<Props>(BannerList, 'banner', 12, 'row');

export default BannerListWithSkeleton;