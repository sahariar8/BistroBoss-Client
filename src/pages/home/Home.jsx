import React from 'react';
import Banner from './banner/Banner';
import Category from './category/Category';
import PopularMenu from './popular menue/PopularMenu';
import FeaturedItems from './featuredItems/FeaturedItems';
import Testimonials from './testimonials/Testimonials';
import Cheff from './Cheff/Cheff';
import Contact from './contact/Contact';
import About from './Bistro/About';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Cheff></Cheff>
            <FeaturedItems></FeaturedItems>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;