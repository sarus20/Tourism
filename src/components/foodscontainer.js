import React from 'react';
import FoodList from '../data/foods';
import Food from './food';
import Foods from './foods';
import {Route} from 'react-router-dom';

const FoodContainer =(props)=>{

    let foodUrl =FoodList.map((food) =>{

        return (
            <Route path ={`/foods/${food.url}`} render = {()=> <Food image={food.img_src} name={food.name} description={food.Description} />} />
                  
        );

    });
       return  (
           <div>
               <Route exact path = '/foods' render ={()=> <Foods/>} />
               {foodUrl}
           </div>
       )

  
    
};
export default FoodContainer;