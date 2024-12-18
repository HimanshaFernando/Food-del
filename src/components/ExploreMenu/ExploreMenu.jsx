import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover a variety of delicious dishes from top restaurants. Whether it's a quick snack or a full meal, explore tasty options that satisfy every craving!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={ category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
            )
        
 } )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu