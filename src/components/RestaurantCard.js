import React from 'react'
import { CDN_URL } from './utils/constants'

const RestaurantCard = (props) => {
  
    const {resData} = props

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"} }>
           <img className="res-image"
            alt="res-image" 
            src={ CDN_URL  + resData.info.cloudinaryImageId}></img>
            
            <h2> {resData.info.name} </h2>
            <h4> {resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating} Rating</h4>
            <h4> Delivery Time: {resData.info.sla.deliveryTime} minutes</h4>        
        </div>
    )
}

export default RestaurantCard