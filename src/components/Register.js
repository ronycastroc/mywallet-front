import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../service/mywalletService";
import { ContentLogin } from "./Login";
import Logo from "./Logo";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const navigate = useNavigate();

    localStorage.clear();
    
    function sendForm(e) {
        e.preventDefault();

        const body = {
            name,
            email,
            password
        }

        if(password !== confirmPass) {
            setPassword('');
            setConfirmPass('');
            alert('Senhas não confere, digite novamente!');
            return; 
        }

        postRegister(body)
        .then(() => {
            resetForm();
            navigate('/');
        })
        .catch(() => {
            resetForm();
            alert('Algo deu errado, digite novamente.')
        })
    }

    function resetForm() {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
    }

    return (
        <>
            <Logo />

            <form onSubmit={sendForm}>
                <ContentLogin>
                    <input type="text" name="name" placeholder="Nome"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                    />

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

                    <input type="password" name="confirm-password" placeholder="Confirme a Senha"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                    />

                    <button>Cadastrar</button>

                    <Link to={'/'}>
                        <p>Já tem uma conta? Entre agora!</p>
                    </Link>
                </ContentLogin>
            </form>
        </>
    )
}