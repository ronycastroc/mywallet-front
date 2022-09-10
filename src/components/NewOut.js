import { useState } from "react";
import styled from "styled-components";
import { ContentLogin } from "./Login";
import { postValue } from "../service/mywalletService";
import { useNavigate } from "react-router-dom";

export default function NewOut() {
    const [value, setValue] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            value: Number(value),
            text,
            type: 'out'
        }

        postValue(body)
        .then(() => {
            resetForm();
            navigate('/mywallet');
        })
        .catch(() => {
            resetForm();
            alert('Algo deu errado, tente novamente.');
        })
    }

    function resetForm() {
        setValue('');
        setText('');
    }

    return (
        <>        
            <Header>
                <h1>Nova Saída</h1>
            </Header>           

            <form onSubmit={sendForm}>
                <ContentLogin>
                    
                    <input type="number" name="number" 
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    />
                        
                    <input type="text" name="text" 
                    placeholder="Descrição"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    />

                    <button>Salvar Saída</button>
                    
                </ContentLogin>

            </form>
        </>        
    )
}

const Header = styled.div`
    width: 85%;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;

    h1 {
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }
`