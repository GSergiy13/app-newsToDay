
import style from './style.module.scss'

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void 
}


export default function Search ({keywords, setKeywords} : Props) {
  return(
    <div className={style.search}>
      <input className={style.input} type="text" value={keywords} onChange={e => setKeywords(e.target.value)} placeholder='Ukrain War, politic, trump...' />
    </div>
  )
}

