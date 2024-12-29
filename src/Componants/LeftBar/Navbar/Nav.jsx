import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation(); // الحصول على مسار الصفحة الحالية
    const currentPath = location.pathname; // الحصول على اسم المسار الحالي

    return (
        <>
            <header className="pb-5 pt-0 ml-2 flex items-start justify-end">
                <div className="p-5 w-[300px] bg-zinc-700 border border-none rounded-xl ">
                    <ul className="flex justify-between items-start gap-1">
                        
                        <Link to="/">
                            <li className={`cursor-pointer ${currentPath === "/" ? `text-yellow-400 font-bold` : `text-white`}`}>Main_Page</li>
                        </Link>

                        <Link to="/portfolios">
                            <li className={`cursor-pointer ${currentPath === "/portfolios" ? `text-yellow-400 font-bold` : `text-white`}`}>Portfoilo</li>
                        </Link>

                        <Link to="/Contact">
                            <li className={`cursor-pointer ${currentPath === "/Contact" ? `text-yellow-400 font-bold` : `text-white`}`}>Contact</li>
                        </Link>

                    </ul>
                </div>
            </header>
        </>
    );
};

export default Nav;
