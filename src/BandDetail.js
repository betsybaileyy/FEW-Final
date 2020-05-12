import React, { Component } from 'react';
import Like from './Like';

class BandDetail extends Component {
    render () {
        const {band} = this.props
    return (
      <div>
              <h2>{band.band_name}</h2>
              <p>Formed: {band.formed}</p>
              <p>{band.origin}</p>
              <p>Fans: {band.fans}</p>
              <Like />
      </div>
    )
  }
}
  
  export default BandDetail