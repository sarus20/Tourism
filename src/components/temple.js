import React from 'react';
import {Link} from 'react-router-dom';


const Temple=(props)=>{




    return(
    <div className="main-content">
        <Link to="/temples" className="back">Back</Link>
    <h2>{props.title}</h2>
    <div className="container">
             <div class ="image-profile" style={{ backgroundImage: "url(" + props.image +")" }}></div>
     <h2> {props.name}</h2>
    <p>{props.description} </p>
    </div>
    </div>
    );
};

export default Temple;