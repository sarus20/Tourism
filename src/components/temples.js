import React from 'react';
import {Link} from 'react-router-dom';
import TempleList from '../data/temples';

const Temples=(props)=>{

    let bestTemples =TempleList.map((temple)=>{
        return (
            <div className="temple-container">
              <Link to={`/temples/${temple.url}`}>

                  <div className="temple-image" style={{ backgroundImage: "url(" + temple.img_src +")" }}> </div>
              </Link>
        <h3>{temple.name}</h3>
            </div>

        );
    });

return(
    <div className="main-content">
 <Link to="/" className="back">Back</Link>
    <h2>{props.title}</h2>
    <div className="container">
        {bestTemples}
       

    </div>


    </div>

 );
};


export default Temples;


