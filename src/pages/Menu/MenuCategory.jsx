import React from 'react';
import MenuCard from '../shared/MenuCard';
import { Link } from 'react-router-dom';
import Cover from '../shared/Cover';

const MenuCategory = ({item,img,title,desc}) => {
    return (
        <div>
            <Cover
            img={img}
            title={title}
            desc={desc}
          ></Cover>
             <div className='grid md:grid-cols-2 gap-10 py-16'>
                {
                    item.slice(0,4).map(item=><MenuCard item={item} key={item._id}></MenuCard>)
                }
           </div>
           <div className='py-8 flex justify-center'>
              <Link to={`/order/${title}`}><button className='btn btn-outline normal-case border-0 border-b-4 font-bold'>Order Your Favourite Food</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;