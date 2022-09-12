import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { postLogin } from "../service/mywalletService";


export default function Login() {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const navigate = useNavigate();

    localStorage.clear();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            email,
            password,
        } 

        postLogin(body)
        .then(res => {
            resetForm();
            localStorage.setItem('name', JSON.stringify(res.data.name))
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate('/mywallet');
        })
        .catch(() => {
            alert('Seu email ou senha estão incorretos, digite novamente.');
            resetForm();
        })        
    }

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Logo />
            
            <form onSubmit={sendForm}>
                <ContentLogin>
                    <input type="email" name="email" placeholder="E-mail"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <input type="password" name="password" placeholder="Senha"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                    <button>Entrar</button>

                    <Link to={'/register'}>
                        <p>Primeira vez? Cadastre-se</p>
                    </Link>
                </ContentLogin>
            </form>
            
            
        </>       
    )
}

const ContentLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 85%;

    input {
        height: 55px;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
    }

    input:focus {
        outline-color: #8C11BE;
    }

    input::placeholder {
        padding-left: 10px;
        font-size: 1rem;
        color: #000000;
    }

    button {
        height: 45px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #A328D6;
        color: #FFFFFF;
        cursor: pointer;
    }

    p {
        text-align: center;
        margin-top: 30px;
        color: #FFFFFF;
        font-size: 0.85rem;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
`
export { ContentLogin };