import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from './utils/mockData'
import { Link } from 'react-router-dom'

const Body = () => {

    // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    // react hook - normal js fn where that function is a utility fn(has some logic inside)
   const [listOfRestaurants, setListOfRestaurants] = useState([])
  // const[showList, setShowList] = useState(false)
   const [searchedRestaurants, setSearchedRestaurants] = useState([])
   const [searchText, setSearchText] = useState("")

  useEffect(() =>{
    fetchData();

  }, [])

  const fetchData = async() =>{

    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const json = await data.json();

    console.log(json)
    //optional chaining
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setSearchedRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
}


    const handleFilter = () =>{
      const filteredLists =  listOfRestaurants.filter((restaurant) =>{
            return restaurant.info.avgRating > 4.2
        })
        console.log(filteredLists)
        setListOfRestaurants(filteredLists)
       // setShowList(!showList)
    }

    const handleSearch = (searchText) =>{

        const searchedLists = listOfRestaurants.filter((restaurant)=>{
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        console.log(searchText)
        console.log(searchedLists)
        setSearchedRestaurants(searchedLists)
        
    }
    //console.log(searchText)
  return (
    <div className="body">
            <div className="search">
                
                <input type='text'  className='search-box' value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
                
                <button className='search-btn' 
                onClick={()=>{handleSearch(searchText)}}> Search </button>
            </div>
           
            <div className='filter'>
                <button className='filter-btn'
                        onClick={() =>{handleFilter()} } >
                         Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
               
             {  
                searchedRestaurants.map((restaurant) => {

                   return (
                   <Link  key={restaurant.info.id}  to={"/restaurants/" +  restaurant.info.id}>
                   <RestaurantCard  resData = {restaurant}/>
                  </Link>
                   )
                })
             }
                
            </div>
        </div>
  )
}

export default Body