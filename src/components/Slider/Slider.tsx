import React, { useRef } from "react";
import style from './style.module.scss';

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if(!sliderRef.current) return;

    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if(!sliderRef.current) return;
    
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={style.slider}>
      <button onClick={scrollLeft} className={style.arrows}>{'<'}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={style.arrows}>{'>'}</button>
    </div>
  );
};

export default Slider;
