import React, {FC} from 'react';
import ReactDOM from "react-dom";
import {RouterProvider} from "react-router-dom";
import {router} from "./Components/router/router";
import {store} from "./state/redux-store";
import {Provider} from "react-redux";

// type rerenderEntireTreeType = {
//     dataState: AppRootStateType
// }

// let rerenderEntireTree = () => {
    ReactDOM.render(
        // <App />,
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>,
        document.getElementById('root')
    );
// }
//
//
//
// rerenderEntireTree()

// store.subscribe(()=>{
//     rerenderEntireTree()
// })