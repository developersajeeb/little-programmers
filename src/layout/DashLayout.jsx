import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";


const DashLayout = () => {
    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>            
        </>
    );
};

export default DashLayout;