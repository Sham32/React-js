import React from 'react';
import CardItem from './CardItems';
import './Cards.css'

const Cards = () => {
  return ( 
    <>
    <div className="cards">
      <h1>Check out these EPIC Desctenation!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem  
            src='images/img-9.jpg'
            text = "Explore the hidden waterfull deep inside the Amazon junge"
            label = 'Adventure'
            path = '/services'
            />
             <CardItem  
            src='components\images\img-2.jpg'
            
            text = "Explore the hidden waterfull deep inside the Amazon junge"
            label = 'Luxery'
            path = '/services'
            />
          </ul>

          <ul className="cards__items">
            <CardItem  
            src='images/img-9.jpg'
            text = "Explore the hidden waterfull deep inside the Amazon junge"
            label = 'Adventure'
            path = '/services'
            />
             <CardItem  
            src='components\images\img-2.jpg'
            
            text = "Explore the hidden waterfull deep inside the Amazon junge"
            label = 'Luxery'
            path = '/services'
            />
            <CardItem  
            src='../img-9.jpg'
            
            text = "Explore the hidden waterfull deep inside the Amazon junge"
            label = 'Luxery'
            path = '/services'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Cards;