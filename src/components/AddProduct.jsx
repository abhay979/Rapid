import { IconButton } from '@mui/material';
import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
export const AddProduct = ({ onAddProduct }) => {
    return (
        <div>
             <IconButton onClick={onAddProduct} style={{backgroundColor:"#f5c083",maxWidth:"30px",height:"30px"}}><AddRoundedIcon style={{color:"black",height:"27px"}}/></IconButton>
        </div>
    )
}