import React, { useState } from 'react';

function Filter({ onFilter, onPageSizeChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [pageSize, setPageSizeState] = useState(5); // Default value is 5

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onFilter({ searchTerm: event.target.value, email, birthDate, gender });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    onFilter({ searchTerm, email: event.target.value, birthDate, gender });
  };

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
    onFilter({ searchTerm, email, birthDate: event.target.value, gender });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    onFilter({ searchTerm, email, birthDate, gender: event.target.value });
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

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name, username, email, birth date, gender..."
        className="input-style"
      />

      {/* Email Filter */}
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Filter by Email"
        className="input-style"
      />

      {/* Birth Date Filter */}
      <input
        type="text"
        value={birthDate}
        onChange={handleBirthDateChange}
        placeholder="Filter by Birth Date"
        className="input-style"
      />

      {/* Gender Filter */}
      <select value={gender} onChange={handleGenderChange} className="input-style">
        <option value="">Filter by Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}

export default Filter;
