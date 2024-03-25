import style from './style.module.scss'
import BannerList from '../BannerList/BannerList'

export default function LastNews ({isLoading, banners}) {
  return(
    <section className={style.section}>
      <BannerList isLoading={isLoading} banners={banners} />
    </section>
  )
}

