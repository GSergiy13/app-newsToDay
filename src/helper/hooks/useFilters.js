import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFileter] = useState(initialFilters);

  const changeFilter = (key, value) => {
    setFileter(prev => {
      return {
        ...prev,
        [key]: value
      }
    }) 
  };

  return {filters, changeFilter}
}

