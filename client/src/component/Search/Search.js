import React, { useState } from 'react';
import './Search.css'

const userList = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Bob Johnson', age: 40 }
];

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}, {user.age}</li>
      ))}
    </ul>
  );
};

const SearchBar = ({ onClick }) => {
  const [searchKey, setSearchKey] = useState('');
  console.log(searchKey)
  return (
    <button  className='search-btn' value={searchKey} onClick={(e)=>setSearchKey(e.target.value)} > Search </button>
  );
};

const Search = () => {
  const [filteredUsers, setFilteredUsers] = useState(userList);

  const handleSearch = searchKey => {
    const filtered = userList.filter(user =>
      user.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className='container'>
        <input className='input' type='text'/> 
      <SearchBar className='search-btn' onClick={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Search;
