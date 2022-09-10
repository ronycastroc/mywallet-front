import styled from "styled-components";

export default function CashBalance({values}) {

    const entry = values.filter(sum => sum.type === 'entry')
    .reduce((total, value) => total + value.value, 0);

    const out = values.filter(sum => sum.type === 'out')
    .reduce((total, value) => total + value.value, 0);

    const cashBalance = entry - out;

    return (
        <Cash cashBalance={cashBalance}>
            <span>Saldo</span>
            <span>{cashBalance.toFixed(2)}</span>
        </Cash>
    )
}

const Cash = styled.div`
    position: absolute;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    bottom: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    span:nth-child(1) {
        font-size: 1rem;
        font-weight: bold;
    }

    span:nth-child(2) {
        font-size: 1rem;
        color: ${props => props.cashBalance > 0 ? '#03AC00' : '#C70000'};        
    }
`