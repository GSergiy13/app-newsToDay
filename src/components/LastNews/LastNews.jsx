import style from './style.module.scss'
import BannerList from '../BannerList/BannerList'
import { useFetch } from '../../helper/hooks/useFetch'
import { getLastNews } from '../../api/apiNews'

export default function LastNews () {

  const {data, err, isLoading} = useFetch(getLastNews)

  return(
    <section className={style.section}>
      <BannerList isLoading={isLoading} banners={data && data.news} />
    </section>
  )
}

