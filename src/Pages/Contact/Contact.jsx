// eslint-disable-next-line no-unused-vars
import React from 'react';
import SIdebar from '../../Componants/Sidebar/Sidebar';
import Contactdata from '../../Componants/LeftBar/Contact/Contactdata';


const Contact = () => {
    return (
        <>
            <section className="mx-auto p-10 font-cairo">
            <div className="flex flex-col gap-7 lg:flex-row lg:justify-around">
                    {/* Sidebar */}
                    <div className=" sm:w-[127%] md:w-[100%]  lg:w-[30%] -mx-10 lg:mx-0 ">
                        <SIdebar />
                    </div>
                    {/* Rightbar */}
                    <div className=" sm:w-[127%] md:w-[100%]  lg:w-[75%] -mx-10 lg:mx-0 ">
                        <Contactdata />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
