import React from 'react'
import { AddProduct } from "./AddProduct";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <Card key={product.name} sx={{ maxWidth: 345,height:"350px",margin:"auto",backgroundColor: "#7f5a83",backgroundImage: "linear-gradient(180deg, #7f5a83 0%, #0d324d 74%);"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={product.imageurl}
          key={product.name}
          sx={{height:"220px"}}
        />
        <CardContent >
          <Typography  gutterBottom variant="h5" component="div" color={'white'}>
           {product.name}
          </Typography>
          <Typography variant="body2" color="white" >
              
            {product.description}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
      <Button variant="outlined" size="medium" sx={{backgroundColor:"whitesmoke"}} disabled>
      <Typography variant="body2" color="black">
₹{product.price}
</Typography>
        </Button>
      
      <AddProduct onAddProduct={addProduct} />
      </div>
        </CardContent>
      </Card>
    )
}