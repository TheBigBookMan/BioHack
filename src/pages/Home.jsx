import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center  p-4">
            <div className="flex flex-col gap-12">
                <h1 className="text-white tracking-widest text-sm">
                    RE-ENGINEERING HUMAN MECHANICS
                </h1>
                <h1 className="font-bold text-white text-5xl">
                    {" "}
                    Computational BioHacking
                </h1>
                <div className="flex gap-2 border-2 border-red-400 rounded mx-auto w-[240px] h-[60px]">
                    <div className="w-4/6 flex items-center justify-center">
                        <h1 className="text-white text-xs tracking-widest font-bold">
                            WATCH VIDEO
                        </h1>
                    </div>
                    <div className="bg-red-500 w-3/6 opacity-40 flex justify-center rounded-r items-center">
                        <BsFillPlayFill className="text-white opacity-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
