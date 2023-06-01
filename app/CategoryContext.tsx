import { createContext } from "react";

interface CategoryContextType {
    category: 'Engineering' | 'Leadership' | 'ALL';
    toggleCategory: (category: 'Engineering' | 'Leadership') => void;
  }
  
  export const CategoryContext = createContext<CategoryContextType>({
    category: 'ALL',
    toggleCategory: () => {},
  });