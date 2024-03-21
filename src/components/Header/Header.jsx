import { formatDate } from "../../helper/formatDate.js";
import style from './style.module.scss'


export default function Header () {
  return(
    <header className={style.header}>
      <h1 className={style.logo_text}>NewsToDay</h1>

     <div className={style.date}>
        {
          formatDate(new Date())
        }
      </div> 
    </header>
  )
}