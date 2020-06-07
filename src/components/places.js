import React from 'react';
import {Link} from 'react-router-dom';
import PlaceList from '../data/places';

const Places=(props)=>{

    let bestPlaces =PlaceList.map((place)=>{
        return (
            <div className="place-container">
              <Link to={`/places/${place.url}`}>
                  <div className="place-image" style={{ backgroundImage: "url(" + place.img_src +")" }}> </div>
              </Link>
        <h3>{place.name}</h3>
            </div>

        );
    });

    return(
    <div className="main-content">
        <Link to="/" className="back">Back</Link>
    <h2>{props.title}</h2>
    <div className="container">
        {bestPlaces}
    </div>


    </div>
    );
};

export default Places;