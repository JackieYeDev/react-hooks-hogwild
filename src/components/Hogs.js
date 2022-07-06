import React, { useState } from 'react';

function Hogs({ hog }) {
  const cards = hog.map((hog, index) => (
    <div key={index} className='ui card eight wide column'>
      <div className='image'>
        <img src={hog.image} alt={hog.name}></img>
      </div>
      <div className='content'>
        <div className='header'>{hog.name}</div>
      </div>
      <div className='description'>
        <p>Specialty: {hog.specialty}</p>
        <p>Weight: {hog.weight}</p>
        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
        <p>Highest Medal Acheived: {hog['highest medal achieved']}</p>
      </div>
    </div>
  ));

  return <div className='ui grid container'>{cards}</div>;
}

export default Hogs;
