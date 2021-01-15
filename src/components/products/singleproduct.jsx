import React from 'react';
import { Button, Grid } from '@material-ui/core';
import ProductService from '../../services/Product';
import { withRouter } from 'react-router-dom';
import userService from '../../services/UserService';
import ReactStars from "react-rating-stars-component";
import $ from "jquery"
import "../../index.css"
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
    console.log(props);
    return ( <Grid item xs={4}>
        <img src={product.Link} alt="Product" width="50%"></img>
        <h2>{product.name} 
        {userService.isAdmin() && 
        <>
        <Button variant="contained" color="primary" onClick={e=>{
            console.log("Update");
            history.push("/products/update/"+product._id);
        }}>   Edit</Button>
         <Button variant="contained" color="secondary" onClick={e=>{
             ProductService.deleteProduct(product._id).then((data)=>{
                 console.log(data)
                 onDelete();
             }).catch((err=>{
                 console.log(err);
             }));
         }}>   Delete</Button>
         </>}</h2>
        
        <h5>Price :</h5><p>Rs.{product.price}</p>
        <h5>Category :</h5><p>{product.category}</p>
        <br/>
        <Button variant="contained" color="secondary">Add to Cart</Button>
        <hr/>
    </Grid> );
}
 
export default withRouter(SingleProduct);