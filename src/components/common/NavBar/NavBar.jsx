const NavBar = () => {
    return (
        <div className="p-8 flex justify-between">
            <h1 className="font-bold">BioHack</h1>
            <ul className="flex flex-col relative group cursor-pointer">
                <div className="absolute w-8 h-1 bg-black right-8 rounded-2xl"></div>
                <div className="absolute w-6 h-1 bg-black right-8 top-2 rounded-2xl"></div>
                <div className="absolute w-8 h-1 bg-black right-8 top-4 rounded-2xl"></div>
            </ul>
        </div>
    );
};

export default NavBar;
