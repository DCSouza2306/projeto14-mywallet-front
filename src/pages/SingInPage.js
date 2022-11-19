import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function SingInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);

  function loginUser(e){
    e.preventDefault();

    setEnable(true);

    const newLogin = {
        email: email,
        password: password
    }
  }

  return (
    <LoginPage disable={enable ? "none" : ""}>
      <h1>MyWallet</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          disabled={enable}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          type="password"
          disabled={enable}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="senha"
          required
        />
        <button className="button-login" type="submit" disabled={enable}>
          <p>Entrar</p>
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={enable}
          />
        </button>
      </form>

      <Link to="/sign-up">
        <button>Primeira vez? Cadastre-se</button>
      </Link>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  background-color: #8c11be;
  height: 100vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    color: #ffffff;
    margin-top:70px;
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
      width: 326px;
      height: 58px;
      margin-top: 10px;
      font-size: 20px;
      border-radius: 8px;
      border: 1px solid #dbdbdb;
    }

    .button-login {
      background-color: #a328d6;
      border: none;
      border-radius: 5px;
      width: 326px;
      height: 46px;
      font-size: 20px;
      text-decoration: none;
      color: #ffffff;
      margin-top: 10px;
      font-family: 'Raleway', sans-serif;
    }
  }

  button{
    background-color: #8c11be;
    border: none;
    color: #ffffff;
    margin-top: 25px;
  }

  button:hover{
    cursor: pointer;
  }
`;
