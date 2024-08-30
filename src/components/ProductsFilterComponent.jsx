import React, { useState } from 'react';

function Filter({ onFilter, onPageSizeChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [pageSize, setPageSizeState] = useState(5); // Default value is 5

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilter({ searchTerm, title: event.target.value, brand, category });
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    onFilter({ searchTerm, title, brand: event.target.value, category });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilter({ searchTerm, title, brand, category: event.target.value });
  };

  const handlePageSizeChange = (event) => {
    const newSize = Number(event.target.value);
    setPageSizeState(newSize);
    onPageSizeChange(newSize); // Notify the parent component of the page size change
  };

  return (
    <div className="filter">
      Filter Page
      {/* Page Size Input */}
      <select id="pageSize" value={pageSize} onChange={handlePageSizeChange} className="input-style">
        <option value={5}>5 records</option>
        <option value={10}>10 records</option>
        <option value={20}>20 records</option>
        <option value={50}>50 records</option>
      </select>

      {/* Title Filter */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Filter by Title"
        className="input-style"
      />

      {/* BrandFilter */}
      <input
        type="text"
        value={brand}
        onChange={handleBrandChange}
        placeholder="Filter by Brand"
        className="input-style"
      />

      {/* Category Filter */}
      <select value={category} onChange={handleCategoryChange} className="input-style">
        <option value="">All Categories</option>
        <option value="laptops">Laptops</option>
      </select>
    </div>
  );
}

export default Filter;
