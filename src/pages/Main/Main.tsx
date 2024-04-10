import style from './style.module.scss'

import LastNews from '../../components/LastNews/LastNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

export default function Main() {


  return(
    <main className={style.main}>
      <LastNews />

      <NewsByFilters/>
    </main>
  )
}