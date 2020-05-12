import React, { Component } from 'react';
import data from './metal.json';
import BandDetail from './BandDetail';
import Like from './Like';

class Band extends Component {
    render () {
    return (
      <div>
          {data.map((bandDetail, index)=>{
              return <BandDetail band={bandDetail} />
            
          }   )
          
          }
        <Like />
      </div>
    )
  }
}
  
  export default Band


//   <h2>{bandDetail.band_name}</h2>
//   <p>Formed: {bandDetail.formed}</p>
//   <p>{bandDetail.origin}</p>
//   <p>Fans: {bandDetail.fans}</p>
