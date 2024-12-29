import Main from "./Main/Main";
import Nav from "./Navbar/Nav";
import Socialmedia from "./Socialmedia/Socialmedia";

const Rightbar = () => {
    return (
        <>
            <section className="z-50  relative overflow-hidden bg-zinc-800 pl-2 pt-0 pb-10 shadow shadow-sm shadow-gray-400 border border-none rounded-3xl">
                <Nav />
                <Main />
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
        </>
    );
}

export default Rightbar;
