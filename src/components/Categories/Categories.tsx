import { ForwardedRef, forwardRef } from 'react';
import style from './style.module.scss';
import { CategoriesType } from '../../interfaces';

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}



const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory } : Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={style.categories}>
      <button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? style.active : style.item}>
        {'all'}
      </button>
      {categories.map(elem => (
        <button key={elem} onClick={() => setSelectedCategory(elem)} className={selectedCategory === elem ? style.active : style.item}>
          {elem}
        </button>
      ))}
    </div>
    );  
  }
);

Categories.displayName = "Categories";

export default Categories;
