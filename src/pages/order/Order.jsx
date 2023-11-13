import React, { useState } from 'react';
import Cover from '../shared/Cover';
import banner from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCards from './FoodCards/FoodCards';
import useMenu from '../../assets/hooks/useMenu';
import OrderCard from './OrderCard/OrderCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {

    

    const categories = ['Salad','Pizza','Soup','Desserts','Drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);

    
    const dessert = menu.filter(item=>item.category === 'dessert');
    const soup = menu.filter(item=>item.category === 'soup');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const salad = menu.filter(item=>item.category === 'salad');
    const drinks = menu.filter(item=>item.category === 'drinks');

    return (
      <div>
        <Helmet>
            <title>Bistro Boss | Order</title>
        </Helmet>
        <Cover
          img={banner}
          title={"Our Shop"}
          desc="Ready To Eat? Please Order as soon as possible for your Delicious Dish and We Confirm it as soon as possible"
        ></Cover>
        <div className="flex  py-10">
          <Tabs
            selectedIndex={tabIndex}
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
               <OrderCard item={salad}></OrderCard>
            </TabPanel>

            <TabPanel>
                <OrderCard item={pizza}></OrderCard>
            </TabPanel>

            <TabPanel>
                <OrderCard item={soup}></OrderCard>
            </TabPanel>

            <TabPanel>
                <OrderCard item={dessert}></OrderCard>
            </TabPanel>

            <TabPanel>
                <OrderCard item={drinks}></OrderCard>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Order;