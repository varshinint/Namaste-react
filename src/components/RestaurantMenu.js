import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API, MENU_API2 } from './utils/constants'
import { CDN_URL } from './utils/constants'
import MenuCard from './MenuCard'

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
        console.log('use effect')
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API + resId + MENU_API2)
    
        const json =  await data.json()

        console.log(json)

        setResInfo(json.data)
    
    }

if(resInfo === null) return <Shimmer/>


//{resInfo.cards[2].card.card.info.name}
const {name, cuisines, costForTwoMessage, cloudinaryImageId,avgRating} = resInfo.cards[2].card.card.info

// resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0]

const {itemCards} =  resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

console.log('itemCards',itemCards)

  
return (
    <div className='menu'>
        <div className='menu-header'>
            <div> 
                <h1> {name} </h1>
                <h3> {cuisines.join(', ')} </h3>
                <h3> {costForTwoMessage}</h3>
            </div>
           
            <div>
                
                <img className="res-image" alt="res-image" 
                src={ CDN_URL  + cloudinaryImageId}></img>
            </div>
        </div>
        
        <div>
             <MenuCard menuList = {itemCards}/>
        </div>

    </div>
  )
}

export default RestaurantMenu