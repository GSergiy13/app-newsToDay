import { getCategories } from "../../api/apiNews.js";
import { useFetch } from "../../helper/hooks/useFetch.js";
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import style from './style.module.scss'


export default function NewsFilters ({filters, changeFilter}) {
  const {data: dataCategories} = useFetch(getCategories);

  return(
    <div className={style.filters}>
      {dataCategories ? <Categories 
        categories={dataCategories.categories} 
        setSelectedCategory={(category) => changeFilter('category', category)}
        selectedCategory={filters.category} /> : null}

        <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
    </div>
  )
}

