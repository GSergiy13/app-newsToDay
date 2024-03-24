import Skeleton from "../../components/Skeleton/Skeleton";

export default function withSkeleton(Component, type, count) {
  return function WIthSkeleton(props) {
    const {isLoading, ...restProps} = props;

    if(isLoading) {
      return <Skeleton type={type} count={count} />
    }

    return <Component {...restProps} />
  }
}