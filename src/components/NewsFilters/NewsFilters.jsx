import { getCategories } from "../../api/apiNews.js";
import { useFetch } from "../../helper/hooks/useFetch.js";
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import Slider from "../Slider/Slider.jsx";
import style from './style.module.scss'


export default function NewsFilters ({filters, changeFilter}) {
  const {data: dataCategories} = useFetch(getCategories);

  return(
    <div className={style.filters}>

      {dataCategories ? (<Slider>
          <Categories
          categories={dataCategories.categories} 
          setSelectedCategory={(category) => changeFilter('category', category)}
          selectedCategory={filters.category} />
        </Slider>) : null}

        <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

    </div>
  )
}

