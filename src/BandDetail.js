import React, { Component } from 'react';
import Like from './Like';
import './Band.css';


class BandDetail extends Component {


    render () {
        const {band} = this.props

    if (band.split === '-') {
    return (
      <div className="Band">
              <h2>{band.band_name}</h2>
              <p>Formed: {band.formed}</p>
              <p>{band.origin}</p>
              <p>Fans: {band.fans}</p>
              <Like />
      </div>
    )
  } else {
      return (
    <div className="Band">
    <h2>{band.band_name}</h2>
    <p>Formed: {band.formed}</p>
    <p>{band.origin}</p>
    <p>Fans: {band.fans}</p>
    <p> Split Year: {band.split}</p>
    
</div>
      )
  }

}
}
  
  export default BandDetail