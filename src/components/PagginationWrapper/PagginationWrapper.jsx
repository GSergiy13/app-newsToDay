import Pagination from "../Pagination/Pagination";


export default function PagginationWrapper ({top, bottom, children, ...propsParination}) {
  return(
    <>
    {top && <Pagination {...propsParination} />}
      {children}
    {bottom && <Pagination {...propsParination} />}
    </>
  )
}