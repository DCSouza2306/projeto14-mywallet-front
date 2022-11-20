import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/urls";
import { AuthContext } from "../providers/auth";
import Lauch from "./Launchs";

export default function Wallet() {
  const { userData } = React.useContext(AuthContext);

  const [myWallet, setMyWallet] = useState([]);
  const [balance, setBalance] = useState(0);

  const config = {
    headers: { Authorization: `Bearer ${userData.token}` },
  };

  useEffect(() => {
    axios.get(`${URL_BASE}/wallet`, config).then((res) => {
      const wallet = res.data;
      setMyWallet(wallet);
      let incomes = 0;
      let expenses = 0;
      let sum;

      wallet.forEach((e) => {
        if (e.type === "income") {
          incomes += parseFloat(e.value);
        } else {
          expenses += parseFloat(e.value);
        }
      });

      sum = incomes - expenses;
      setBalance(sum)
    });
  }, []);
  return (
    <IncomesAndExpenses
      disable={myWallet.length === 0 ? "" : "none"}
      disableBalance={myWallet.length === 0 ? "none" : "flex"}
      disableAlign={myWallet.length === 0 ? "center" : ""}
      changeJustify={myWallet.length === 0 ? "center" : "space-between"}
      colorBalance={balance > 0 ? "#03AC00": "#C70000"}
    >
      <p className="inicial-message">Não há registros de entrada ou saída</p>
      <ul>
        {myWallet.map((m) => (
          <Lauch
            key={m.id}
            date={m.date}
            description={m.description}
            value={m.value}
            type={m.type}
          />
        ))}
      </ul>

      <div className="balance">
        <p>SALDO</p>
        <p>{balance}</p>
      </div>
    </IncomesAndExpenses>
  );
}

const IncomesAndExpenses = styled.div`
  width: 326px;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: ${(props) => props.disableAlign};
  justify-content: ${(props) => props.changeJustify};

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    overflow-y: scroll;
    overflow: hidden;
  }

  .inicial-message {
    color: #868686;
    font-size: 20px;
    width: 180px;
    height: 46px;
    text-align: center;
    display: ${(props) => props.disable};
  }

  .balance {
    margin: 8px 15px;
    display: ${(props) => props.disableBalance};
    justify-content: space-between;

    p:nth-child(1){
        font-weight: bold;
    }

    p:nth-child(2){
        color: ${(props) => props.colorBalance}
    }
  }
`;
