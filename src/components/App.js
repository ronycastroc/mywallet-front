/* import { useState } from "react"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyles";
/* import UserContext from "../context/UserContext"; */
import Login from "./Login";




export default function App () {
    return (
        <BrowserRouter>
         <GlobalStyle />
            <Routes>
                  <Route path='/' element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}