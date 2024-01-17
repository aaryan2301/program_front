import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    // Trigger search on every change
    onSearch(newSearchTerm);
  };

  return (
    <div style={{fontSize: "2.5vh", display: "flex",alignContent: "center" }}>
      {/* <label htmlFor="search">Search:</label> */}
      <h4>Search
        </h4>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter Program name..."
        className='can'
        
        style={{
            width: "17vw",
            height: "2vh",
            padding: "1%",
            // border: 'none', outline: 'none',
            marginLeft: '1vw',
            fontSize: '2.5vh',
            marginTop: '2.9vh'
        }}
        // className="chote-dabbe"
      />
    </div>
  );
};

export default SearchField;
