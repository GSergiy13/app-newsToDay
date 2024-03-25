import style from './style.module.scss'

import LastNews from '../../components/LastNews/LastNews.jsx';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx';

export default function Main() {


  return(
    <main className={style.main}>
      <LastNews />

      <NewsByFilters/>
    </main>
  )
}