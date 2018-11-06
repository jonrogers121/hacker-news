import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Main from "./Main";
import NavBar from "./components/NavBar";


export const App = () => (
    <div>
        <NavBar />
        <Main />
    </div>
)

export default App
