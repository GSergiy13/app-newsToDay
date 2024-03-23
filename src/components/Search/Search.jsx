
import style from './style.module.scss'


export default function Search ({keywords, setKeywords}) {
  return(
    <div className={style.search}>
      <input className={style.input} type="text" value={keywords} onChange={e => setKeywords(e.target.value)} placeholder='Ukrain War, politic, trump...' />
    </div>
  )
}

