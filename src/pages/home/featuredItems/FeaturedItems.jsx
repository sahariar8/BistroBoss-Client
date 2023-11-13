import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import img from '/featured.jpg'


const FeaturedItems = () => {
    return (
        <div className="bg-[url('/featured.jpg')] bg-cover text-white bg-fixed">
            <div className='bg-black bg-opacity-60'>
                <div className='md:pt-20'>
                    <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
                </div>
                <div className='md:flex md:px-10 pt-10 md:pb-32  pb-10 items-center'>
                    <div className='w-full md:w-1/2'>
                        <img src={img} alt=""  className='md:px-10 px-4'/>
                    </div>
                    <div className='w-full md:w-1/2 px-10 pt-5 md:pt-0'>
                        <h1 className='text-xl'>March 20, 2023</h1>
                        <h1 className='text-xl font-semibold'>WHERE CAN I GET SOME?</h1>
                        <h1 className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum tenetur quas nostrum voluptates iste optio, odio quia doloremque itaque mollitia eaque repellat dolores odit officia dolor sint, eius nihil. Rem.</h1>
                       <div className='py-3'>
                            <button className='btn btn-outline normal-case font-semibold text-white border-b-4 border-0'>Read More</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;