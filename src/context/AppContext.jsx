import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    pageSize: 5,
    searchTerm: '',
  });

  return (
    <AppContext.Provider value={{ data, setData, filters, setFilters }}>
      {children}
    </AppContext.Provider>
  );
};
