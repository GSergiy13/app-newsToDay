import style from './style.module.scss'


export default function Categories ({categories, selectedCategory, setSelectedCategory}) {
  return(
    <div className={style.categories}>
      <button onClick={() => setSelectedCategory(null)} className={!selectedCategory? style.active : style.item}>
              {'all'}
          </button>
      {
        categories.map(elem => {
          
          return <button key={elem} onClick={() => setSelectedCategory(elem)} className={selectedCategory === elem ? style.active : style.item}>
              {elem}
          </button>
        })
      }
    </div>
  )
}