import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Component, type, count, direction) {
  return function WIthSkeleton(props) {
    const {isLoading, ...restProps} = props;

    if(isLoading) {
      return <Skeleton type={type} count={count}  direction={direction}/>
    }

    return <Component {...restProps} />
  }
}