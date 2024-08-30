// Products.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable.jsx';
import Filter from '../components/ProductsFilterComponent.jsx'; 
import Pagination from '../components/Pagination.jsx';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchUsers = async (page, size) => {
    try {
      const response = await axios.get('https://dummyjson.com/products', {
        params: { limit: size, skip: (page - 1) * size },
      });
      setProducts(response.data.products);
      setFilteredProducts(response.data.products); // Initially, show all fetched users
      setTotalPages(Math.ceil(response.data.total / size)); // Calculate total pages
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFilter = ({ title, brand, category }) => {
    let filtered = products; 

    if (title) {
      filtered = filtered.filter(products => products.title === title);
    }

    if (brand) {
      filtered = filtered.filter(products => products.brand === brand);
    }

    if (category) {
      filtered = filtered.filter(products => products.category === category);
    }

    setFilteredProducts(filtered); 
  };

  // Handle page size change and reset the current page to 1
  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when page size changes
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Define columns for the products table
  const productColumns = [
    { label: 'ID', key: 'id' },
    { label: 'Title', key: 'title' },
    { label: 'Brand', key: 'brand' },
    { label: 'Category', key: 'category' },
    { label: 'Price', key: 'price' },
    { label: 'Stock', key: 'stock' },
  ];

  return (

<div>
<h1>Products</h1>
<Filter onFilter={handleFilter} onPageSizeChange={handlePageSizeChange} />
<DataTable columns={productColumns} data={filteredProducts}/>
<Pagination
  currentPage={currentPage}
  pageSize={pageSize}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
</div>

  );
}

export default Products;




