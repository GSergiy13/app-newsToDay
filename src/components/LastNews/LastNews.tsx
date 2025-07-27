import { useGetLastNewsQuery } from '../../store/services/newsApi'
import BannerList from '../BannerList/BannerList'
import style from './style.module.scss'

export default function LastNews() {
	const { data, isLoading } = useGetLastNewsQuery(null)

	return (
		<section className={style.section}>
			<BannerList isLoading={isLoading} banners={data && data.news} />
		</section>
	)
}
