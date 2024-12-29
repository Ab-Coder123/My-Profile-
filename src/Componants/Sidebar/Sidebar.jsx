import PropTypes from "prop-types";
import { Sidebar } from '../../Constant/index';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from "../../Constant/AnimatedSection";
const Sideprop = ({ SidebarProp }) => {
    return (
        <>
            {SidebarProp.map((sideprop) => {
                return (
                    <div className=' flex items-center flex-col' key={sideprop.id}>
                        {/* one */}
                        <div className="py-5 flex flex-row lg:flex-col sm:flex-col gap-5 lg:gap-0 items-center justify-start">
                            <div className="rounded-full overflow-hidden w-40 h-40">
                                <img
                                    className="w-full h-full object-cover object-top"
                                    src={sideprop.imgsidebar} // تأكد من تمرير مسار الصورة الصحيح
                                    alt=""
                                />
                            </div>
                            <AnimatedSection animation="fadeIn" duration="1s">
                                <div className="mt-14 flex flex-col items-center">
                                    <h1 className=" text-xl font-bold mb-3">{sideprop.Name}</h1>
                                    <p className=" text-md bg-zinc-600 p-1 rounded-md text-yellow-300 shadow shadow-sm shadow-slate-500 shadow-current"> {sideprop.bio}</p>
                                </div>
                            </AnimatedSection>

                        </div>


                        <div className='mb-3 w-64 h-[0.1px] rounded-md bg-slate-600'></div>

                        {/* two */}
                        <div className="py-5 flex flex-col items-start justify-between gap-5">
                            {/* EMail */}
                            <AnimatedSection animation="fadeIn" duration="2s">
                                <div className='flex justify-between items-start gap-4'>
                                    <div className='p-1 bg-slate-800 shadow-sm shadow-slate-600 p-2 rounded-md'>
                                        <FontAwesomeIcon icon="mail-bulk" className="text-yellow-400 " />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p>E-Mail</p>
                                        <Link>
                                            {sideprop.Email}
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                            {/* Whatsup */}
                            <AnimatedSection animation="fadeIn" duration="3s">

                                <div className='flex justify-between items-start gap-4'>
                                    <div className='p-1 bg-slate-800 shadow-sm shadow-slate-600 p-2 rounded-md'>
                                        <FontAwesomeIcon icon="phone" className="text-yellow-400" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p>Phone</p>
                                        <Link>
                                            {sideprop.Watsup}
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>

                        </div>
                    </div>


                )
            })}



        </>
    );
}


Sideprop.propTypes = {
    SidebarProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imgsidebar: PropTypes.string.isRequired,
            Name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            Email: PropTypes.string.isRequired,
            Watsup: PropTypes.string.isRequired,
        })
    ).isRequired,
};


const SIdebar = () => {
    return (
        <div className="relative">
            {/* Main Content Section */}
            <section className="z-50 relative lg:fixed w-full lg:w-[350px]  border border-none rounded-3xl bg-zinc-800 py-10 shadow shadow-sm shadow-gray-400">
                <Sideprop SidebarProp={Sidebar} />
            </section>

            {/* Cube in the Background */}
            <div className="cube-container absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center -z-10">
                <div className="cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default SIdebar;
