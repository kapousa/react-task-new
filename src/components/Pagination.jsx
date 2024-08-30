// Pagination.jsx
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = [...Array(totalPages).keys()].map((_, index) => index + 1);

  return (
    <div className="pagination">
      <button className='button' onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map((page) => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : 'inactive'}
        >
          {page}
        </button>
      ))}
      <button className='button' onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

