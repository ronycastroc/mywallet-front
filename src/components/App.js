/* import { useState } from "react"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyles";
/* import UserContext from "../context/UserContext"; */
import Login from "./Login";
import Register from "./Register";
import MyWallet from "./MyWallet";
import NewEntry from "./NewEntry";
import NewOut from "./NewOut";

export default function App() {
    return (
        <BrowserRouter>
         <GlobalStyle />
            <Routes>
                  <Route path='/' element={<Login />}/>
                  <Route path='/register' element={<Register />}/>
                  <Route path='/mywallet' element={<MyWallet />}/>
                  <Route path='newentry' element={<NewEntry />}/>
                  <Route path='newout' element={<NewOut />}/>
            </Routes>
        </BrowserRouter>
    )
}