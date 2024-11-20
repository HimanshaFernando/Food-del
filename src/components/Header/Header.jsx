import React from 'react'
import './Header.css'  // Use relative import

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favorite Food Here</h2>
            <p>Discover a wide variety of delicious meals, freshly prepared and ready to be delivered to your doorstep. Whether you're in the mood for a quick snack or a hearty meal, we've got something for everyone. Browse through our menu, choose your favorites, and enjoy a seamless food ordering experience with just a few clicks!</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
