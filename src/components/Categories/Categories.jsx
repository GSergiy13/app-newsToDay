import style from './style.module.scss'


export default function Categories ({categories, setSelectedCategory, selectedCategory}) {
  return(
    <div className={style.categories}>
      {
        categories.map(elem => (
          <div key={elem} onClick={() => setSelectedCategory(elem)} className={selectedCategory === elem ? style.active : style.item}>
              {elem}
          </div>
        ))
      }
    </div>
  )
}