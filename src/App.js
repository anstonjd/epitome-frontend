import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import { FormElements } from "./components/FormElements";
import TestFile from "./components/TestFile";
import HomePage from "./pages/HomePage";
import { Win98 } from "./pages/Win98";


const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<FormElements/>}/> */}
                <Route path="/" element={<TestFile/>}/>
                <Route path="/Win98" element={<Win98/>}/>
                <Route path="/Home" element={<HomePage/>}/>

            </Routes>
        </Router>
    )
}

export default App;