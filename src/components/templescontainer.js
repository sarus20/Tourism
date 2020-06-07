import React from 'react';
import TempleList from '../data/temples';
import Temple from './temple';
import Temples from './temples';
import {Route} from 'react-router-dom';

const TempleContainer =(props)=>{

    let templeUrl =TempleList.map((temple) =>{

        return (
            <Route path ={`/temples/${temple.url}`} render = {()=> <Temple image={temple.img_src} name={temple.name} description={temple.Description} />} />
                  
        );

    });
       return  (
           <div>
               <Route exact path = '/temples' render ={()=> <Temples/>} />
               {templeUrl}
           </div>
       )

  
    
};
export default TempleContainer;