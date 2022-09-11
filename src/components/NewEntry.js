import styled from "styled-components";
import { ContentLogin } from "./Login";
import { postValue } from "../service/mywalletService";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function NewEntry() {
    const { cash, setCash, title, setTitle } = useContext(UserContext);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            value: Number(cash),
            text: title,
            type: 'entry'
        }

        postValue(body)
        .then(() => {
            resetForm();
            navigate('/mywallet', );
        })
        .catch(() => {
            resetForm();
            alert('Algo deu errado, tente novamente.');
        })
    }

    function resetForm() {
        setCash('');
        setTitle('');
    }

    return (
        <>        
            <Header>
                <h1>Nova Entrada</h1>
            </Header>           

            <form onSubmit={sendForm}>
                <ContentLogin>
                    
                    <input type="number" name="number" 
                    placeholder="Valor"
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                    required
                    />
                        
                    <input type="text" name="text" 
                    placeholder="Descrição"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />

                    <button>Salvar Entrada</button>
                    
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