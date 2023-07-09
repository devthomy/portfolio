import React from 'react';
import Project from "~/src/components/project/project"
import Btssio from "~/src/components/project/btssio"

const Page = () => {
    return (
        <div className='bg-primary-grey'>
            <Project />
            <hr className='border-t-4 border-primary-dark my-4 mx-auto w-3/4' />
            <Btssio /> 
        </div>
    );
};

export default Page;
