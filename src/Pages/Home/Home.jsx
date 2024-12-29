import SIdebar from '../../Componants/Sidebar/Sidebar';
import Rightbar from '../../Componants/LeftBar/Rightbar';

const Home = () => {
    return (
        <>
            <section className="mx-auto p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:justify-around">
                    {/* Sidebar */}
                    <div className=" sm:w-[127%] md:w-[100%]  lg:w-[30%] -mx-10 lg:mx-0 ">
                        <SIdebar />
                    </div>
                    {/* Rightbar */}
                    <div className=" sm:w-[127%] md:w-[100%]  lg:w-[75%] -mx-10 lg:mx-0 ">
                        <Rightbar />
                    </div>
                </div>
            </section>


        </>
    );
}

export default Home;
