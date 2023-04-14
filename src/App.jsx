import NavBar from "./components/common/NavBar/NavBar";
import Home from "./pages/Home";

//TODO this will just be a landing page similar to the BioComputer cool website

// todo use threejs to create some interaction
//todo maybe try blender to create some cool models or something

//TODO have some pages that have cool effects with transitions and interactivity

function App() {
    return (
        <div className="flex flex-col bg-gradient-to-t from-gray-900 via-blue-900 to-violet-500 h-screen w-screen">
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
