import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../shared/Cover';
import menu1 from '../../assets/menu/banner3.jpg'
import menu2 from '../../assets/menu/dessert-bg.jpeg'
import menu3 from '../../assets/menu/pizza-bg.jpg'
import menu4 from '../../assets/menu/salad-bg.jpg'
import menu5 from '../../assets/menu/soup-bg.jpg'
import PopularMenu from '../home/popular menue/PopularMenu';
import useMenu from '../../assets/hooks/useMenu';
import MenuCard from '../shared/MenuCard';
import SectionTitle from '../shared/SectionTitle';
import MenuCategory from './MenuCategory';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [ menu ] = useMenu();
    const dessert = menu.filter(item=>item.category === 'dessert');
    const soup = menu.filter(item=>item.category === 'soup');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const salad = menu.filter(item=>item.category === 'salad');
    const offers = menu.filter(item=>item.category === 'offered');
    console.log(offers.length)
    return (
      <div>
        <Helmet>
          <title> Bistro Boss | Menu</title>
        </Helmet>
        <div>
          {/* cover image */}
          <Cover
            img={menu1}
            title={"Our Menu"}
            desc={"Would you like to try a dish?"}
          ></Cover>

          {/* section title */}

          <div className="py-5">
            <SectionTitle
              heading={"TODAY'S OFFER"}
              subHeading={"Don't miss"}
            ></SectionTitle>
          </div>

          {/* categorywise item */}
          <div className='grid md:grid-cols-2 gap-10 py-10'>
                {
                    offers.slice(0,4).map(item=><MenuCard item={item} key={item._id}></MenuCard>)
                }
           </div>
           <div className='py-8 flex justify-center'>
              <Link to='/order/Salad'><button className='btn btn-outline normal-case border-0 border-b-4 font-bold'>Order Your Favourite Food</button></Link>
           </div>
        </div>

        <div>
          {/* categorywise item */}
          <MenuCategory item={dessert} img={menu2}   title={"Desserts"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
        <div>
          {/* categorywise item */}
          <MenuCategory item={pizza}  img={menu3}  title={"Pizza"}  desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
        <div>
          {/* categorywise item */}
          <MenuCategory item={salad} img={menu4} title={"Salad"}  desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
        <div>
          {/* categorywise item */}
          <MenuCategory item={soup} img={menu5} title={"Soup"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
      </div>
    );
};

export default Menu;