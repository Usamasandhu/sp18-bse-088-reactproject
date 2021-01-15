import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Toolbar } from '@material-ui/core';
import userService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
 const useStyles = makeStyles((theme) => ({
    Name: {
       color:"black",
     },
   }));
const TopMenu = () => {
    const classes = useStyles();
     return ( 
    
    <Navbar bg="dark" variant="dark">
    <Nav className="mx-auto">
      <Nav.Link href="/"><img src="https://scontent.flhe6-1.fna.fbcdn.net/v/t1.0-9/95332357_116001500095523_7579334070060974080_n.jpg?_nc_cat=101&ccb=2&_nc_sid=85a577&_nc_ohc=l0vHuTcevXgAX9MC9s5&_nc_ht=scontent.flhe6-1.fna&oh=802255794047630e27d28c40267b3897&oe=602490E4" class="rounded-circle" height="0.2%" width="1%" alt="Shpatu"/></Nav.Link>
      <Nav.Link href="/"  style={{textAlign:"left",marginLeft:"20px",marginRight:"80px",color:"white"}}><strong>SHPATU</strong></Nav.Link>
      <Nav.Link href="/products" style={{marginRight:"30px",color:"white"}}>Products</Nav.Link>
      <div className="form-group">
        <input type="search" id="search" className="form-control" aria-describedby="SearchProduct" placeholder="Search Product Here..... "></input>
      </div>
      <Nav.Link href="/contact-us" style={{marginLeft:"30px",color:"white"}}>Contact Us</Nav.Link>
      {!userService.isLoggedin()? <>
        <Nav.Link href="/login" style={{marginLeft:"30px",color:"white"}}>Login</Nav.Link>
        <Nav.Link href="/register" style={{marginLeft:"30px",color:"white"}}>Register</Nav.Link>   
             </>:<Button variant="contained"  onClick={(e)=>{
                 userService.logout();
                 window.location.reload();
             }}>Log Out {userService.getLoggedinUser().name}</Button>}
    </Nav>
  </Navbar>
    );

}
 
export default TopMenu;