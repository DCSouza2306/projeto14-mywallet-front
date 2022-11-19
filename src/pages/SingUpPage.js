import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { URL_BASE } from "../constants/urls";

export default function SingUpPage() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();

  function signUpUser(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("As senhas não conferem");
      return;
    }
    setEnable(true);

    const newUser = {
      name,
      email,
      password,
    };
    axios.post(`${URL_BASE}/sign-up`, newUser).then((res) => {
      alert("Usuário criado com sucesso");
      navigate("/");
    }).catch((err) => {
        alert(err.response.data.message);
        setEnable(false);
    });
  }

  return (
    <SignUpPage disable={enable ? "none" : ""}>
      <h1>MyWallet</h1>
      <form onSubmit={signUpUser}>
        <input
          type="text"
          disabled={enable}
          value={name}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          disabled={enable}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          disabled={enable}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          type="password"
          disabled={enable}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirme a senha"
          required
        />
        <button className="button-login" type="submit" disabled={enable}>
          <p>Cadastrar</p>
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
      <Link to="/">
        <button>Já tem uma conta? Entre agora</button>
      </Link>
    </SignUpPage>
  );
}

const SignUpPage = styled.div`
  background-color: #8c11be;
  height: 100vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    display: ${(props) => props.disable};
  }

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    color: #ffffff;
    margin-top: 70px;
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
      font-family: "Raleway", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    background-color: #8c11be;
    border: none;
    color: #ffffff;
    margin-top: 25px;
  }

  button:hover {
    cursor: pointer;
  }
`;
