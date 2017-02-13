import React, { PropTypes } from "react"
import Page from '../Page'
import Map from '../../components/Map';
import HotelsData from '../../assets/hotels/data'

const Hotel = ({ hotel }) => {
  const {
    photo,
    name,
    type,
    address,
    contact,
    discount,
    rate,
    cost,
    note,
    url
  } = hotel

  const htype = type ? 'Hostal' : 'Hotel'

  return (
    <div className="medium-dark-blue open-sans lh-copy flex">
     { photo &&
       <img src={photo} alt={name} />
     }
     <div>
      <p>{ htype } : { name }</p>
      { address &&
        <p>Address: { address }</p>
      }
      { contact &&
        <p>Contact: { contact }</p>
      }
      { discount &&
        <p>Discount code: { discount }</p>
      }
      { rate &&
        <p>Rate: { rate }</p>
      }
      { cost &&
        <p>Approximate cost: { cost }</p>
      }
      { note &&
        <p>Note: { note }</p>
      }
      { url &&
        <p><a href={ url }>{ url }</a></p>
      }
     </div>
    </div>
  )
}

Hotel.propTypes = {
  hotel: PropTypes.object.isRequired
}

const Hotels = (props) => {
  return (
    <Page { ...props }>
      <div>
        <Map />
        { HotelsData.map((hotel, i) => <Hotel hotel={hotel} key={i} />) }
      </div>
    </Page>
  )
}

export default Hotels