import styled from "styled-components";
import { deleteValue } from "../service/mywalletService";

export default function ValuesUser({text, value, type, date, id}) {

    function deleteIdValue() {
        const confirm = window.confirm('Deseja exluir esse valor?');

        if(confirm) {
            deleteValue(id).catch(error => {
                console.error('Não foi possivel apagar valor');
                console.error(error);
            }
        )}
    }

    return (
        <Infos type={type}>                    
            <span>{date}</span>
            <span>{text}</span>
            <span>{value.toFixed(2)}</span>
            <span onClick={deleteIdValue}>X</span>
        </Infos>
    )
}

const Infos = styled.div`
    margin-top: 10px;
    position: relative;

    span:nth-child(1) {
        color: #C6C6C6;
        font-size: 0.9rem;
        margin-left: 10px;        
    }

    span:nth-child(2) {
        color: #000000;
        font-size: 0.9rem;
        margin-left: 5px;        
    }

    span:nth-child(3) {
        color: ${props => props.type === 'entry' ? '#03AC00' : '#C70000'};
        font-size: 0.9rem;
        right: 25px;
        position: absolute;
    }

    span:nth-child(4) {
        color: #C6C6C6;
        font-size: 0.9rem;
        right: 10px;
        position: absolute;
        cursor: pointer;
    }
`