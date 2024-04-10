import Skeleton from "../../components/Skeleton/Skeleton";
import { DirectionType, SkeletonType } from "../../interfaces";

interface Props {
  isLoading: boolean;

}

export default function withSkeleton<P extends object>(Component: React.ComponentType<P>, type?: SkeletonType, count?: number, direction?: DirectionType) {
  return function WIthSkeleton(props: Props & P) {
    const {isLoading, ...restProps} = props;

    if(isLoading) { 
      return <Skeleton type={type} count={count}  direction={direction}/>
    }

    return <Component {...(restProps as P)} />
  }
}