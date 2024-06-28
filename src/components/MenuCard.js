import React, { useState } from 'react'
import { CDN_URL } from './utils/constants'

const MenuCard = (props) => {

    const {menuList} = props

    const [addItem, setAddItem] = useState(0)

    console.log('MenuCard Render')
    console.log(menuList)

   const handleAddItem = () =>{
        setAddItem(addItem + 1)
        console.log(addItem)
    }

  return (
    <div className='menu-card'>
     
                {
                menuList.map((item)=>{
                     return (
                    <div className='item-card'>
                        <ul>
                            <li key = {item.card.info.id} > 
                                <h2> {item.card.info.name } </h2>
                                <h4> Rs {item.card.info.price}</h4>
                                <h4> {item.card.info.description}</h4>
                            </li>
                        </ul>
                        
                        <div>
                            <img className="menu-img" alt="menu-img" 
                            src = { CDN_URL  + item.card.info.imageId}> </img>
                            <br></br>
                            <div className='btn'> 
                            <button className='add-btn' onClick={() =>{handleAddItem()}}> + </button>
                            <p>  </p>
                            <button className='sub-btn'> - </button>
                            </div>
                        </div>
                     </div>
                    )
                })
                }
    </div>
  )
}

export default MenuCard