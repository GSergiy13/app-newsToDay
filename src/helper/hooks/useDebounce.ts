import { useEffect, useState } from "react"

export const useDebounce = (vlu : string, deley : number) => {
  const [debouncedValue, setDebouncedValue] = useState(vlu);

  useEffect(() => {
    const hendler = setTimeout(() => {
      setDebouncedValue(vlu)
    }, deley)


    return () => {
      clearTimeout(hendler);
    }
  }, [vlu, deley])

  return debouncedValue;
};