import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container,Carousel,Card,CardDeck, CardColumns } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {} from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { BiDollar,BiPaperPlane } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import $ from "jquery"
import "../index.css"
const LandingPage = () => {
    
    return ( 
        <div>
        <Grid contained>
            <Grid contained style={{backgroundColor:"whitesmoke"}}>
            <div>
            <h4 class = "logo" >
              <img src="https://scontent.flhe6-1.fna.fbcdn.net/v/t1.0-9/95332357_116001500095523_7579334070060974080_n.jpg?_nc_cat=101&ccb=2&_nc_sid=85a577&_nc_ohc=l0vHuTcevXgAX9MC9s5&_nc_ht=scontent.flhe6-1.fna&oh=802255794047630e27d28c40267b3897&oe=602490E4" class="rounded-circle mx-auto d-block" height="30%" width="30%" alt="Shpatu"/>
            </h4>
            <div>
            <h1 class = "log" >
              <img src="https://scontent.flhe6-1.fna.fbcdn.net/v/t1.0-9/94886131_116614573367549_5070463923791069184_n.jpg?_nc_cat=102&ccb=2&_nc_sid=dd9801&_nc_ohc=TMe0xUmZQNIAX9oJVL6&_nc_ht=scontent.flhe6-1.fna&oh=df55cabc4d134f65d586d787b7cf97ba&oe=60274E44" alt="" class="rounded" height="100%" width="100%"/>            
            </h1>
            </div>
            <div>
            <h1 class = "text-center" >Vision Statement</h1>
            </div>
            <div>
            <p class = "text-center">We aim to continuously innovate to be the best destination for our customers and partners</p>
            </div>
            </div>
            </Grid>
        </Grid>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <CardDeck className="card">
            <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://asset.pk/wp-content/uploads/2018/08/bc11e9023cce03648772cd517af2dcbb.jpeg"/>
            <Card.Body>
            <h2>Shirts</h2>  
            <p>
                80$
            </p>
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/11/DENIM-DARK-BLUE-11_1-500x667.jpg" />
            <Card.Body>
            <h2>Jeans</h2>
            <p>
                100$
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
            </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/12/JT-004_1-500x667.jpg" />
            <Card.Body>
            <h2>Jogging Trousers</h2>
            <p>
                56$
            </p>
            
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        </CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/10/KURTA-166_1-500x667.jpg" />
            <Card.Body>
            <h2>Kurta</h2>
            <p>
                70$
            </p>    
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/12/SK-285_1-500x667.jpg" />
            <Card.Body>
            <h2>Eastern Wear</h2>
            <p>
                80$
            </p>
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
            </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2019/01/tie-382-500x667.jpg" />
            <Card.Body>
            <h2>Tie</h2>
            <p>
                30$
            </p>    
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/11/WTR-199_1-500x667.jpg" />
            <Card.Body>
            <h2>Dress Trouser</h2>
            <p>
                70$
            </p>  
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <CardColumns>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/11/WTR-199_1-500x667.jpg" />
            <Card.Body>
            <h2>Shirts</h2>
            <p>
                70$
            </p>
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/11/WTR-199_1-500x667.jpg" />
            <Card.Body>
            <h2>Shirts</h2>
            <p>
                70$
            </p>
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        <Card style={{width:"50%"}}>
            <Card.Img variant="top" src="https://www.shahzebsaeed.com/wp-content/uploads/2020/11/WTR-199_1-500x667.jpg" />
            <Card.Body>
            <h2>Shirts</h2>
            <p>
                70$
            </p>
            <Button variant="info" className="cardButton">Add to Cart</Button>
            </Card.Body>
        </Card>
        </CardColumns>
    </CardDeck>
        </Grid>
        </Grid>
      </div>
     );
};

 
export default LandingPage;