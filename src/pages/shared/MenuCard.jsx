import React from 'react';

const MenuCard = ({item}) => {
    const {image,name,recipe,price} = item;
    return (
        <div className='flex gap-8 '>
            <div className='w-1/5'>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt=""  className='w-full hover:scale-110' />
            </div>
            <div className='w-4/5'>
                <div className='flex justify-between '>
                <h1 className='uppercase font-semibold text-lg text-slate-700'>{name}-----------</h1>
                <h2 className='text-yellow-600 font-semibold' >$ {price}</h2>
                </div>
                <h2 className='text-slate-600 py-1'>{recipe}</h2>
            </div>

          
            
        </div>
    );
};

export default MenuCard;