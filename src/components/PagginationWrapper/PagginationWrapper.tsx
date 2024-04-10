import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export default function PagginationWrapper ({top, bottom, children, ...propsParination} : Props & IPaginationProps) {
  return(
    <>
    {top && <Pagination {...propsParination} />}
      {children}
    {bottom && <Pagination {...propsParination} />}
    </>
  )
}