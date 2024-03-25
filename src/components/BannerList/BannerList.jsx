import style from './style.module.scss';
import withSkeleton from '../../helper/hocs/withSkeleton.jsx';
import NewsBanner from '../NewsBanner/NewsBanner.jsx';


function BannerList ({banners}) {
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

const BannerListWithSkeleton = withSkeleton(BannerList, 'banner', 12, 'row');

export default BannerListWithSkeleton;