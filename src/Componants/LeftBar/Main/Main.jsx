import PropTypes from "prop-types";
import { Maindata } from '../../../Constant/index';
import AnimatedSection from '../../../Constant/AnimatedSection';
import Whardo from "../Whatdo/Whardo";
import { useTranslation } from "react-i18next";

export const Aboutme = ({ AboutProp }) => {
    return (
      <section className="py-1 ">
        <div className="flex flex-col gap-3">
          <AnimatedSection animation="fadeIn" duration="2s">
            <div className="flex flex-col items-start  pb-10">
              <h2 className="mb-1 font-bold text-xl">{AboutProp.About_me}</h2>
              <div className="mb-3 w-10 h-1.5 rounded-md bg-yellow-500"></div>
              <p className="mb-3">{AboutProp.Praph1}</p>
            </div>
          </AnimatedSection>
  
          <AnimatedSection animation="fadeIn" duration="2.5s">
            <div>
              <p className=" w-[90%] ">{AboutProp.Praph2}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

Aboutme.propTypes = {
    AboutProp: PropTypes.shape({
      About_me: PropTypes.string.isRequired,
      Praph1: PropTypes.string.isRequired,
      Praph2: PropTypes.string.isRequired,
    }).isRequired,
  };

const Main = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // اللغة الحالية (en أو ar)
  
    return (
        <>
            <section className="flex flex-col gap-4 items-start">
                {/* div1 */}
                <div className="mb-10">
                <Aboutme AboutProp={Maindata[currentLanguage].translation} />
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
