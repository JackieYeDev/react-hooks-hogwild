import React, { useState } from 'react';

function Filter({ handleInput, handleCriteria, handleGreased }) {
  return (
    <div>
      <input
        onChange={handleInput}
        placeholder='Enter a search string...'
        name='input'
      ></input>
      <select onChange={handleCriteria} name='criteria'>
        <option value='Name'>Name</option>
        <option value='Weight'>Weight</option>
      </select>
      Sort
      <select onChange={handleGreased} name='greased'>
        <option value='All'>All</option>
        <option value='true'>Greased</option>
        <option value='false'>Not Greased</option>
      </select>
    </div>
  );
}

export default Filter;
