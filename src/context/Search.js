import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
    search: null,
    newSearch: () => {},
});

const { Provider } = SearchContext;

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(""); 
    
    const newSearch = (text) => {
        console.log("newSearch")
        setSearch(text);
      };

    return <Provider value={{search, newSearch}}>{children}</Provider>
}