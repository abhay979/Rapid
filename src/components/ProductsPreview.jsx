import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";
import Carousel from 'react-grid-carousel'

export const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data?.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }
    
    return (
        <div style={{width:"75%",margin:"auto"}}>
           <Carousel  cols={3} rows={1} gap={5} >
            {
                products.length > 0 && products.map((product, index) => {
                    return (
                      <Carousel.Item >
                            <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct} />
                        </Carousel.Item>
                    )
                })
            }
            </Carousel>
        </div>
    )
}