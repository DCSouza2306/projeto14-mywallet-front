import styled from "styled-components";

export default function Wallet(){
    return(
        <IncomesAndExpenses>
            <p>Não há registros de entrada ou saída</p>
        </IncomesAndExpenses>
    )
}

const IncomesAndExpenses = styled.div`
width: 326px;
height:446px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;

p{
  color: #868686;
  font-size: 20px;
  width: 180px;
  height: 46px;  
  text-align: center
}
`