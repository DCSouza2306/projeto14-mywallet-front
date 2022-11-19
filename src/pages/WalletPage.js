import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/urls";
import { AuthContext } from "../providers/auth";
import Wallet from "../components/Wallet";

export default function WalletPage() {
  const { userData } = React.useContext(AuthContext);

  return (
    <PrincipalPage>
      <div className="top">
        <h2>Olá, {userData.name}</h2>
        <Link to="/">
          <ion-icon name="exit-outline"></ion-icon>
        </Link>
      </div>
      <Wallet />

      <div className="bottom">
        <Link to="/launch/income" style={{ textDecoration: "none" }}>
          <button>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova Entrada</p>
          </button>
        </Link>
        <Link to="/launch/expense" style={{ textDecoration: "none" }}>
          <button>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova Saida</p>
          </button>
        </Link>
      </div>
    </PrincipalPage>
  );
}

const PrincipalPage = styled.div`
  background-color: #8c11be;
  height: 100vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway", sans-serif;

  .top {
    width: 326px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 26px;
      color: #ffffff;
      font-weight: bold;
    }

    ion-icon {
      color: #ffffff;
      font-size: 23px;

      :hover {
        cursor: pointer;
      }
    }
  }

  .bottom {
    width: 326px;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 155px;
    height: 114px;
    background-color: #a328d6;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 17px;

    :hover {
      cursor: pointer;
    }

    p {
      width: 64px;
      text-align: left;
    }
    ion-icon {
      font-size: 25px;
    }
  }
`;
