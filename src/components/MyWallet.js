import styled from "styled-components";
import { Link } from "react-router-dom";
import Exit from '../assets/img/exit.png';
import Plus from '../assets/img/plus-circle.png';
import Minus from '../assets/img/minus-circle.png';

export default function MyWallet() {
    return (
        <BoxWallet>
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={Exit} alt="exit" />
            </Header>

            <BoxValues>
                <p>Não há registros de<br/> entrada ou saída</p>
            </BoxValues>

            <Footer>
                <Link to={'/newentry'}>
                    <EntryOut>                    
                        <img src={Plus} alt="" />
                        <p>Nova<br/> Entrada</p>             
                    </EntryOut>
                </Link>
                
                <Link to={'/newout'}>
                    <EntryOut>                    
                        <img src={Minus} alt="" />
                        <p>Nova<br/> Saída</p>               
                    </EntryOut>
                </Link>  
            </Footer>
        </BoxWallet>            
    )
}


const BoxWallet = styled.div`
    width: 85%;
    margin: 0 auto;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    h1 {
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
    }

    img {
        width: 22px;
        height: 23px;
    }
`
const BoxValues = styled.div`
    width: 100%;
    height: 340px;
    margin-top: 25px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: table;

    p {
        color: #868686;
        font-size: 1.2rem;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`

const EntryOut = styled.div`
    width: 145px;
    height: 110px;
    background-color: #A328D6;
    border-radius: 5px;
    position: relative;

    p {
        font-size: 1rem;
        font-weight: 700;
        color: #FFFFFF;
        position: absolute;
        left: 10px;
        bottom: 10px;
    }

    img {
        position: absolute;
        left: 10px;
        top: 10px;
    }
`