import React from 'react';
import useMenu from '../../../assets/hooks/useMenu';

const FoodCards = ({item}) => {
    const { name,recipe,image } = item;
    
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body  text-center">
          <h2 className="card-title">{name}</h2>
          <p className=" text-slate-500 font-semibold">
           {recipe}
          </p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-500 bg-slate-50">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;