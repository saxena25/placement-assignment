import { Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Products from "../components/Products";

function AllRoutes() {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
     );
}

export default AllRoutes;