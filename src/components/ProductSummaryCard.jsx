import { useDispatch } from "react-redux";
import './ProductSumm.css'
import {incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice";
import { Typography,Button } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export const ProductsSummaryCard = ({ product }) => {
    const dispatch = useDispatch();
     console.log(product);
    return (
        <div className="bx">
            <div  >
                <img className="simg" src={product.imageurl} alt={product.name} />
            </div>
            <div style={{marginTop:"15px"}} >
            <Typography variant="h5" component="h2">
            {product.name}
            </Typography>
                <Typography variant="body1" >{product.description}</Typography>
            
            <Button variant="outlined" size="small" sx={{backgroundColor:"whitesmoke",width:"90px",marginRight:"15px"}} disabled>
<Typography variant="body" fontSize={20} color="black">
₹{product.price}
</Typography>
        </Button>
       
                <div style={{display:"flex",flexFlow:"row"}}>
                <button className="addbtn"  disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))} ><RemoveIcon/></button>
                    <Typography variant="h6" sx={{marginLeft:"15px",marginRight:"15px",marginTop:"5px"}}>{product.amount}</Typography>
                <button className="addbtn"  disabled={product.amount <= 0} onClick={() => dispatch(incrementProductAmount(product))} ><AddIcon/></button>
                    
                </div>
            </div>
            </div>
            
    )
}