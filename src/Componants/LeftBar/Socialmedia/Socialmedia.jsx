import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Socialmedia = () => {
    return (
        <>
            <div className='flex flex-col items-start mx-2 pb-10'>
                <h2 className='mb-1 font-bold text-xl'>Social media</h2>
                <div className='mb-3 w-10 h-1.5 rounded-md bg-yellow-500'></div>
            </div>
            <div className="card">
            <div className="background"></div>
            <div className="logo">Socials</div>
            <div className="box box1">
                <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                    <FontAwesomeIcon className="svg" icon={faTiktok} />
                </a>
            </div>
            <div className="box box2">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                    <FontAwesomeIcon className="svg" icon={faFacebook} />
                </a>
            </div>
            <div className="box box3">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                    <FontAwesomeIcon className="svg" icon={faLinkedin} />
                </a>
            </div>
            <div className="box box4">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                    <FontAwesomeIcon className="svg" icon={faGithub} />
                </a>
            </div>
            <div className="box box5">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                >
                    <FontAwesomeIcon className="svg" icon={faInstagram} />
                </a>
            </div>
        </div>


        </>
    );
}

export default Socialmedia;
