import React, { useState } from 'react';
import SearchField from './SearchField';
import Programs from './Programs';

const Sidebar = ({ programs, setSelectedProgram, setAddClick, setvariable }) => {
  const [filterDomain, setFilterDomain] = useState('All'); // Default to show all programs
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All'); // Default active filter

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddClick = () => {
    setAddClick(true);
    setvariable(true);
    setSelectedProgram(false);
  };

  const handleFilterClick = (domain) => {
    setFilterDomain(domain);
    setActiveFilter(domain); // Update active filter
  };

  // Filter programs based on domain and search term
  const filteredPrograms = programs
    .filter((program) => (filterDomain === 'All' || program.domain === filterDomain))
    .filter(
      (program) =>
        searchTerm === '' || program.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div style={{ marginLeft: '1vw', marginRight: '5vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Programs</h1>
        <button style={{ marginLeft: '11vw' }} onClick={handleAddClick}>
          add
        </button>
      </div>
      <div style={{ fontWeight: 'bold' }}>{programs.length} Total</div>
      <SearchField onSearch={handleSearch} />
      <div style={{ marginBottom: '4vh', display: 'flex', justifyContent: 'space-around' }}>
        <button
          className={`filter ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => handleFilterClick('All')}
        >
          All
        </button>
        <button
          className={`filter ${activeFilter === 'Data' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Data')}
        >
          Data
        </button>
        <button
          className={`filter ${activeFilter === 'Finance' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Finance')}
        >
          Finance
        </button>
        <button
          className={`filter ${activeFilter === 'Web3' ? 'active' : ''}`}
          onClick={() => handleFilterClick('Web3')}
        >
          Web3
        </button>
      </div>
      <Programs programs={filteredPrograms} setSelectedProgram={setSelectedProgram} setAddClick={setAddClick} />
    </div>
  );
};

export default Sidebar;
