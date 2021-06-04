import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {   //destructuring product array instead of props
    return (
        <Card className='my-3 p-3 rounded'>  {/*add margin and padding*/}
            <a href= {`/product/${product._id}`}>
                <Card.Img src = {product.image} variant='top' /> {/*photo*/}
            </a>
            <Card.Body>
                <a href= {`/product/${product._id}`}>    {/*title*/}
                    <Card.Title as ='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a> 
                
                <Card.Text as ='div'> {/*review*/}
                    <Rating  
                    value ={product.rating}
                    text ={`${product.numReviews} reviews`}
                    /*here we could have set color-prop to something, instead we set its default value in Rating.js itself*/
                    />
                </Card.Text>  

                <Card.Text as ='h6'> {/*price*/}
                    ${product.price}    
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}

export default Product