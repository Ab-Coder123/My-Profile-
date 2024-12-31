import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const Nav = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const currentPath = location.pathname;
    const [language, setLanguage] = useState(i18n.language); // حفظ اللغة في حالة (state)

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        setLanguage(newLang)
        // إذا أردت تغيير اتجاه النصوص
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    };

    const className =
    language === "ar"
      ? "absolute top-3 w-32 right-80  p-2 bg-yellow-500 text-white rounded-lg ml-4"
      : "absolute top-3 w-32 left-80 right-80 p-2 bg-yellow-500 text-white rounded-lg ml-4";


    return (
        <header className="pb-5 pt-0 ml-2 flex items-start justify-between">
            <div className="p-5 w-[300px] bg-zinc-700 border border-none rounded-xl">
                <ul className="flex justify-between items-start gap-1">
                    <Link to="/">
                        <li
                            className={`cursor-pointer ${currentPath === "/" ? `text-yellow-400 font-bold` : `text-white`
                                }`}
                        >
                            {t("Main_Page")}
                        </li>
                    </Link>
                    <Link to="/portfolios">
                        <li
                            className={`cursor-pointer ${currentPath === "/portfolios"
                                    ? `text-yellow-400 font-bold`
                                    : `text-white`
                                }`}
                        >
                            {t("Portfoilo")}
                        </li>
                    </Link>
                    <Link to="/Contact">
                        <li
                            className={`cursor-pointer ${currentPath === "/Contact"
                                    ? `text-yellow-400 font-bold`
                                    : `text-white`
                                }`}
                        >
                            {t("Contact")}
                        </li>
                    </Link>
                </ul>
                <button
                    onClick={toggleLanguage}
                    className={className}
                >
                    {i18n.language === "en" ? "عربي" : "English"}
                </button>
            </div>


        </header>
    );
};

export default Nav;
