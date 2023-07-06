import React from 'react';
import Project from "~/src/components/project/project"


const Page = () => {
    return (
        <div className='bg-primary-grey'>
             <div className="flex p-12 font-alata text-4xl text-white font-bold mb-4 justify-center relative">
        Mes Projets
      </div>
            <Project />
           
        </div>
    );
};

export default Page;