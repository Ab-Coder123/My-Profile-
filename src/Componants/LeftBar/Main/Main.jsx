import PropTypes from "prop-types";
import { Maindata } from '../../../Constant/index';
import AnimatedSection from '../../../Constant/AnimatedSection';
import Whardo from "../Whatdo/Whardo";

const Aboutme = ({ AboutProp }) => {
    return (
        <>
            {AboutProp.slice(0, 1).map((abprop) => {
                return (

                    <>
                        <section className='py-1' key={abprop.id}>
                            <div className='felx flex-col gap-3'>
                                <AnimatedSection animation="fadeIn" duration="2s">
                                    <div className='flex flex-col items-start ml-2 pb-10'>
                                        <h2 className='mb-1 font-bold text-xl'>{abprop.Head}</h2>
                                        <div className='mb-3 w-10 h-1.5 rounded-md bg-yellow-500'></div>
                                        <p className=" mb-3 text-left">{abprop.Praph1}</p>
                                    </div>
                                </AnimatedSection>

                                <AnimatedSection animation="fadeIn" duration="2.5s">
                                    <div className=''>
                                        <p className="text-left w-[90%] ml-2">{abprop.Praph2}</p>
                                    </div>
                                </AnimatedSection>

                            </div>
                        </section>
                    </>





                )
            })}
        </>
    );
}



Aboutme.propTypes = {
    AboutProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            Head: PropTypes.string.isRequired,
            Praph1: PropTypes.string.isRequired,
            Praph2: PropTypes.string.isRequired,
        })
    ).isRequired,
};


const Main = () => {
    return (
        <>
            <section className="flex flex-col gap-4 items-start">
                {/* div1 */}
                <div className="mb-10">
                    <Aboutme AboutProp={Maindata} />
                </div>
                {/* div2 */}
                <div>
                    <Whardo />
                </div>
            </section>

        </>
    );
}

export default Main;
