import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='text-center py-6'>
            <h3 className='text-yellow-500 mb-2'>--- {subHeading} ---</h3>
           <h1 className='text-3xl uppercase border-y-2 py-2 md:w-4/12 mx-auto'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;