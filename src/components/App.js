import React, { useState } from 'react';
import Nav from './Nav';
import Hogs from './Hogs';
import Filter from './Filter';

import hogs from '../porkers_data';

function App() {
  const [hogsList, setHogsList] = useState(hogs);
  const [filterInput, setFilterInput] = useState('');
  const [greasedFilter, setGreasedFilter] = useState('All');
  const [filterBy, setFilterBy] = useState('Name');

  function handleInputChange(event) {
    setFilterInput(event.target.value);
  }
  function handleFilterByChange(event) {
    setFilterBy(event.target.value);
  }
  function handleGreasedFilterChange(event) {
    setGreasedFilter(event.target.value);
  }

  const hogsToDisplay = hogsList
    .filter((h) => {
      if (filterBy === 'Name') {
        return h.name.toLowerCase().includes(filterInput.toLowerCase());
      } else if (filterBy === 'Weight') {
        return h.weight >= filterInput;
      } else {
        return null;
      }
    })
    .filter((h) =>
      greasedFilter === 'All' ? true : h.greased.toString() === greasedFilter
    );
  return (
    <div className='App'>
      <Nav />
      <div>
        <Filter
          handleInput={handleInputChange}
          handleCriteria={handleFilterByChange}
          handleGreased={handleGreasedFilterChange}
        />
        <br />
        <Hogs hog={hogsToDisplay} />
      </div>
    </div>
  );
}

export default App;
