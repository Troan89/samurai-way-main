import React from 'react';
import './App.css';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

type AppPropsType = {
    // store: DataStateType
}

const App = (props: AppPropsType) => {

    const location = useLocation()
    const navigate = useNavigate()

    if (location.pathname === '/') {
        navigate('/profile')
    }
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
