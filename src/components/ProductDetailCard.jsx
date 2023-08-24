import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShoppingCart } from '@mui/icons-material';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const ProductDetailCard = ({ product, onAddProduct }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const addProduct = () => {
        onAddProduct(product)
    }
    return (
        <>
        <Card sx={{ marginRight:"20px",width:"330px", marginTop:"20px",boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);" }}>
        <CardHeader
          title={product.name}
        />
        <CardMedia
          component="img"
          src={product.imageurl}
          alt="Paella dish"
          sx={{height:"250px",width:"320px"}}
        />
        <CardActions disableSpacing>
        
<Button variant="outlined" size="medium" sx={{backgroundColor:"whitesmoke",width:"90px",marginRight:"15px"}} disabled>
<Typography variant="body" fontSize={20} color="black">
₹{product.price}
</Typography>
        </Button>
          <button className='cartbtn' onClick={addProduct}> <span className='cartbtnspan'><ShoppingCart sx={{marginRight:"8px"}}/>Add to Cart</span></button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
             {product.description}
            </Typography>
           
           
          </CardContent>
        </Collapse>
      </Card>
        </>
    )
}

export default ProductDetailCard;