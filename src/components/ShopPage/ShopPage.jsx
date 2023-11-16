import React from 'react'
import "../ShopPage/ShopPage.css"
import TextField from '@mui/material/TextField';
const ShopPage = () => {
  return (
    <div className='Shopcar'>
      <h1>ShopPage</h1>
      <form className='ShopForm'>
        <TextField 
        placeholder ="Name"
        name = "name"
        />
          <TextField 
        placeholder ="Last Name"
        name = "Last Name"
        />
          <TextField 
        placeholder ="City"
        name = "City"
        />
      </form>
      </div>
  )
}

export default ShopPage