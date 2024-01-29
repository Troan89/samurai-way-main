import React from 'react';
import './App.css';
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";

type AppPropsType = {
    // store: DataStateType
}

const App = (props: AppPropsType) => {

    const location = useLocation()
    const navigate = useNavigate()

    if (location.pathname === '/') {
        // navigate('/profile')
        return <Navigate to={'/profile/28717'}/>
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
