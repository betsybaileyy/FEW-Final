import React, { Component } from 'react';
import data from './metal.json';
import BandDetail from './BandDetail';

class Band extends Component {
    render () {
    return (
      <div>
          {data.map((bandDetail, index)=>{
              return <BandDetail band={bandDetail} />
            
          }   )
          
          }
      </div>
    )
  }
}
  
  export default Band


//   <h2>{bandDetail.band_name}</h2>
//   <p>Formed: {bandDetail.formed}</p>
//   <p>{bandDetail.origin}</p>
//   <p>Fans: {bandDetail.fans}</p>
