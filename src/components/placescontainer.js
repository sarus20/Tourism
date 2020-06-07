import React from 'react';
import PlaceList from '../data/places';
import Place from './place';
import Places from './places';
import {Route} from 'react-router-dom';

const PlaceContainer =(props)=>{

    let placeUrl =PlaceList.map((place) =>{

        return (
            <Route path ={`/places/${place.url}`} render = {()=> <Place image={place.img_src} name={place.name} description={place.Description} />} />
                  
        );

    });
       return  (
           <div>
               <Route exact path = '/places' render ={()=> <Places/>} />
               {placeUrl}
           </div>
       )

  
    
};
export default PlaceContainer;