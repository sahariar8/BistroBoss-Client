import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/SectionTitle';
import MenuCard from '../../shared/MenuCard';
import useMenu from '../../../assets/hooks/useMenu';

const PopularMenu = () => {
    const [ menu ] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');

    // const [menu,setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularMenu = data.filter(menu=>menu.category === 'popular');
    //         setMenu(popularMenu);

    //     })
    // },[])
    return (
        <div className='py-10'>
           <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}> </SectionTitle>
           <div className='grid md:grid-cols-2 gap-10 py-16'>
                {
                    popular.map(item=><MenuCard item={item} key={item._id}></MenuCard>)
                }
           </div>
           <div className='py-3 flex justify-center'>
              <button className='btn btn-outline normal-case border-0 border-b-4 font-bold'>View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;