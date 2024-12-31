import AnimatedSection from '../../../Constant/AnimatedSection';
import Nav from '../Navbar/Nav';
import Socialmedia from '../Socialmedia/Socialmedia';
import contactimg from '../../../assets/images/contact.png'
export const Contactform = () => {
    return (
        <>

            <AnimatedSection animation="fadeIn" duration="2s">
                <div className='flex flex-col items-start ml-2 pb-10'>
                    <h2 className='mb-1 font-bold text-xl'>Contact With me</h2>
                    <div className='mb-3 w-10 h-1.5 rounded-md bg-yellow-500'></div>
                </div>

                {/* Start Contact Me Section */}
                <section className="contact" id="contact">
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="image">
                                <img src={contactimg} alt="contactImage" />
                            </div>
                            <div className="contact-info-details">
                                <div className="user">
                                    <h2>Abdulrahman Ahmed</h2>
                                    <p>Web Developer</p>
                                </div>
                                <p className="description">
                                    I am available for freelance work. Connect with me via and call in
                                    to my account.
                                </p>
                                <div className="user-contact">
                                    <p>
                                        Phone: <span>+02 111 868 2951</span>
                                    </p>
                                    <p>
                                        Email: <span>abdoalmaestro123za@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form my-12">
                            <div className="input-row">
                                <div className="input-group">
                                    <label htmlFor="username">Your Name</label>
                                    <input type="text" id="username" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="phone">phone number</label>
                                    <input type="text" id="phone" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="emaik">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="subject">subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="message">message</label>
                                <textarea id="message" defaultValue={""} />
                            </div>
                            <button className="btn mb-5 hover-effect-gradient">send message</button>
                        </div>
                    </div>
                </section>
                {/* End Contact Me Section */}
            </AnimatedSection>

        </>
    );
}


const Contactdata = () => {
    return (
        <div>
                <section className="z-50 relative overflow-hidden bg-zinc-800 px-2 pt-0 pb-10 shadow shadow-sm shadow-gray-400 border border-none rounded-3xl">
                <Nav />
                <Contactform />
                <Socialmedia />
            </section>
            {/* Cube stays under the content */}
            <div className="cube-container absolute top-30 right-28 bottom-0 flex justify-center items-center z-0">
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
}

export default Contactdata;
