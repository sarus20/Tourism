import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import TemplesContainer from './components/templescontainer';
import PlacesContainer from './components/placescontainer';
import FoodsContainer from './components/foodscontainer';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

       <NavBar title="India Tourism"/>
      { /*<Home title="Popular Places in India"/>*/}
      { /* <Route to ="/" component={Home}/>*/}
      <Route exact path ="/" render={()=><Home title="Popular Places in India"/>}/>
      <Route path ="/places" render={()=><PlacesContainer title="Best Places in India"/>}/>
      <Route path ="/temples" render={()=><TemplesContainer title="Best Temples in India"/>}/>
      <Route path ="/foods" render={()=><FoodsContainer title="Best Temples in India"/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
