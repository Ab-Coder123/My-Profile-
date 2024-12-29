import PropTypes from "prop-types";
import { Maindata, Property } from '../../../Constant/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../../../Constant/AnimatedSection';





const Properites = ({ Whatprop }) => {
    return (
        <>
            {Whatprop.map((propertyprop) => {
                return (
                    <>
                        <AnimatedSection animation="fadeIn" duration="2s">

                            <div className=" cursor-pointer lg:ml-2 mb-3 col-span-1 lg:col-span-2" key={propertyprop.id}>
                                <div className=" w-[95%] lg:w-96 bg-zinc-700 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start justify-between">
                                        <div className="service-icon text-gray-400">
                                            <FontAwesomeIcon icon={propertyprop.icon} className="text-yellow-400 h-5 " />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start  mt-4">
                                        <h2 className="text-white text-2xl font-semibold">{propertyprop.ProertyHead}</h2>
                                        <p className="text-gray-400 mt-2  text-left">
                                            {propertyprop.ProertyPrh}                                </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                    </>
                )
            })

            }
        </>
    )
}


const Whatme = ({ Whatprop }) => {
    return (
        <>
            {Whatprop.slice(1, 2).map((Whatmeprop) => {
                return (
                    <div className="flex flex-col items-start ml-2" key={Whatmeprop.id}>
                        <h2 className="mb-1 font-bold text-xl">{Whatmeprop.Head2}</h2>
                        <div className='mb-3 w-10 h-1.5 rounded-md bg-yellow-500'></div>
                        {/* div 2 */}
                    </div>
                )
            })

            }
        </>
    );
}

Whatme.propTypes = {
    Whatprop: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            Head2: PropTypes.string.isRequired,
            Praph1: PropTypes.string.isRequired,
            Praph2: PropTypes.string.isRequired,
            ProertyHead: PropTypes.string.isRequired,

        })
    ).isRequired,
};


Properites.propTypes = {
    Whatprop: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            ProertyHead: PropTypes.string.isRequired,
            ProertyPrh: PropTypes.string.isRequired,

        })
    ).isRequired,
};


const Whardo = () => {
    return (
        <>
            <section className="" >
                <Whatme Whatprop={Maindata} />
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
                <Properites Whatprop={Property} />
            </section>
        </>
    );
}

export default Whardo;
