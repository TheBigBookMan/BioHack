import { useState } from "react";

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="p-8 flex justify-between">
            <h1 className="font-bold">BioHack</h1>
            <ul className="flex flex-col relative group cursor-pointer">
                <div className="absolute w-8 h-1 bg-black right-8 rounded-2xl group-hover:rotate-45 group-hover:top-2 transition"></div>
                <div className="absolute w-6 h-1 bg-black right-8 top-2 rounded-2xl opacity-100  transition group-hover:left-12"></div>
                <div className="absolute w-8 h-1 bg-black right-8 top-4 rounded-2xl group-hover:-rotate-45 group-hover:top-2 transition"></div>
            </ul>
        </div>
    );
};

export default NavBar;
