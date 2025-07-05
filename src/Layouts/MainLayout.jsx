import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import CategorySwiper from "../Components/CategorySwiper"
import { Footer } from "../Components/Footer"


function MainLayout() {



    return (
        <div>
            <Navbar></Navbar>
            <div className="px-5">
                <CategorySwiper></CategorySwiper>
            </div>



            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default MainLayout
