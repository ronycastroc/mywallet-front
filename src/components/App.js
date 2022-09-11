import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyles";
import UserContext from "../context/UserContext";
import Login from "./Login";
import Register from "./Register";
import MyWallet from "./MyWallet";
import NewEntry from "./NewEntry";
import NewOut from "./NewOut";
import UpdateEntry from './UpdateEntry';
import UpdateOut from './UpdateOut';

export default function App() {
    const [cash, setCash] = useState('');
    const [title, setTitle] = useState('');
    const [idValue, setIdValue] = useState('')
    return (
        <BrowserRouter>
            <UserContext.Provider value={{cash, setCash, title, setTitle, idValue, setIdValue}}>

            <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/mywallet' element={<MyWallet />}/>
                    <Route path='newentry' element={<NewEntry />}/>
                    <Route path='newout' element={<NewOut />}/>
                    <Route path='updateentry' element={<UpdateEntry />}/>
                    <Route path='updateout' element={<UpdateOut />}/>
                </Routes>

            </UserContext.Provider>
        </BrowserRouter>
    )
}