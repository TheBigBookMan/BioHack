import { useState } from "react";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="p-8 flex justify-between items-center">
            <h1 className="font-bold">BioHack</h1>
            <ul
                onClick={() => setNavOpen(!navOpen)}
                className="flex flex-col justify-center w-[40px] h-[40px] relative group cursor-pointer"
            >
                <div
                    className={`absolute w-8 h-1 bg-black top-2 rounded-2xl ${
                        navOpen ? "rotate-45" : ""
                    }  transition`}
                ></div>
                <div
                    className={`absolute w-6 h-1 bg-black  rounded-2xl ${
                        navOpen ? "opacity-0" : "opacity-100"
                    }   transition `}
                ></div>
                <div
                    className={`absolute w-8 h-1 bg-black top-7 rounded-2xl  ${
                        navOpen ? "-rotate-45" : ""
                    } transition`}
                ></div>
            </ul>
        </div>
    );
};

export default NavBar;
