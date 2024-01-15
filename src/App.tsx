import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";

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
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
