import { IPaginationProps } from '../../interfaces'
import style from './style.module.scss'



export default function Pagination ({totalPages, henderlNextPage, henderlPrevPage, henderPageClick, currentPage} : IPaginationProps) {

  return(
    <div className={style.pagination}>
      <button disabled={currentPage <= 1} onClick={henderlPrevPage} className={style.arrow}>{'<'}</button>

      <div className={style.list}>
        {[...Array(totalPages)].map((_, index) => {
          return <button 
          onClick={() => henderPageClick(index + 1)}
          disabled={index + 1 == currentPage}
          key={index}
          className={style.pageNumber}>{index + 1}</button>
        })}
      </div>

      <button  disabled={currentPage >= 9} onClick={henderlNextPage}  className={style.arrow}>{'>'}</button>
    </div>
  )
}