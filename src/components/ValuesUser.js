import styled from "styled-components";

export default function ValuesUser({text, value, type, date}) {
    return (
        <Infos type={type}>                    
            <span>{date}</span>
            <span>{text}</span>
            <span>{value.toFixed(2)}</span>
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
        right: 13px;
        position: absolute;
    }
`