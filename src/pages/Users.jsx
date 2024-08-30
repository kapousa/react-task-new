import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable.jsx';
import Filter from '../components/UsersFilterComponent.jsx'; 
import Pagination from '../components/Pagination.jsx';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchUsers = async (page, size) => {
    try {
      const response = await axios.get('https://dummyjson.com/users', {
        params: { limit: size, skip: (page - 1) * size },
      });
      setUsers(response.data.users);
      setFilteredUsers(response.data.users); // Initially, show all fetched users
      setTotalPages(Math.ceil(response.data.total / size)); // Calculate total pages
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFilter = ({ searchTerm, email, birthDate, gender }) => {
    let filtered = users; 

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.maidenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.gender.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (gender) {
      filtered = filtered.filter(user => user.gender === gender);
    }

    if (email) {
      filtered = filtered.filter(user => user.email === email);
    }

    if (birthDate) {
      filtered = filtered.filter(user => user.birthDate === birthDate);
    }

    setFilteredUsers(filtered); 
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

  // Define columns for the users table
  const userColumns = [
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Maiden Name', key: 'maidenName' },
    { label: 'Username', key: 'username' },
    { label: 'Age', key: 'age' },
    { label: 'Gender', key: 'gender' },
    { label: 'Email', key: 'email' },
    { label: 'Birth Date', key: 'birthDate' },
    { label: 'Blood Group', key: 'bloodGroup' },
    { label: 'Eye Color', key: 'eyeColor' },
  ];

  return (
    <div>
      <h1>Users</h1>
      <Filter onFilter={handleFilter} onPageSizeChange={handlePageSizeChange} />
      <DataTable columns={userColumns} data={filteredUsers} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Users;
