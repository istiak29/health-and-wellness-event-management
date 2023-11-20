import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

const Root = () => {
    return (
        <div >
            <div className="mx-auto  ml-10 mr-10 mt-3">
                <Header></Header>
            </div>
            <div className=" mx-auto  border-2 ml-10 mr-10 mt-3">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;