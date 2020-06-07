import React from 'react';
import { Link } from 'react-router-dom';
import FoodsList from '../data/foods';

const Foods = (props) => {


    let bestFoods = FoodsList.map((food) => {

        return (
            <div className="food-container">
                <Link to={`/foods/${food.url}`}>
                    <div className="food-image" style={{ backgroundImage: "url(" + food.img_src + ")" }}> </div>
                </Link>
                <h3>{food.name}</h3>
            </div>

        );

    });


    return (
        <div className="main-content">
            <Link to="/foods" className="back">Back</Link>
            <h2>{props.title}</h2>
            <div className="container">
                {bestFoods}
            </div>


        </div>
    );

};

export default Foods;