import style from './style.module.scss';

export default function NewsBanner ({image}) {
  return(
    <div className={style.wrapper}>
        { image ? <img className={style.image} src={image} alt='img' /> : null }
    </div>
  )
}