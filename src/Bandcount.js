import React from 'react';
import data from './metal.json';

function Bandcount() {
    const bandcount = data.length;
    return (
      <div>
          <p>Band count: {bandcount}</p>
      </div>
    )
  }
  
  export default Bandcount