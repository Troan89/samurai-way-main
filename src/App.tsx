import React, { useEffect } from "react"
import "./App.css"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar"
import { HeaderContainer } from "./Components/Header/HeaderContainer"
import { useAppDispatch, useAppSelector } from "./state/redux-store"
import { initializeApp } from "./state/appReducer"
import { Preloader } from "./Components/common/Preloader/Preloader"

type AppPropsType = {
  // store: DataStateType
}

const App = (props: AppPropsType) => {
  const initialized = useAppSelector((state) => state.app.initialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeApp())
  })

  const location = useLocation()

  if (location.pathname === "/") {
    return <Navigate to={"/profile/28717"} />
  }
  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <React.Suspense fallback={<Preloader />}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
