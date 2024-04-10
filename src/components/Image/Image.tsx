import style from './style.module.scss';

interface Props {
  image: string;
}

export default function NewsBanner ({image} : Props) {
  return(
    <div className={style.wrapper}>
        { image ? <img src={image} className={style.image}  alt='img' /> : null }
    </div>
  )
}