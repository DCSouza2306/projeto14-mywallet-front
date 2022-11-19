import { useParams } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../providers/auth";
import dayjs from "dayjs";
import axios from "axios";
import { URL_BASE } from "../constants/urls";
import { useNavigate } from "react-router-dom";

export default function LauchPage() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [enable, setEnable] = useState(false);
  const {userData} = React.useContext(AuthContext)
  const navigate = useNavigate();
  const config = {
    headers:
    { 'Authorization': `Bearer ${userData.token}` }
  }

  const { type } = useParams();
  let text;
  if (type === "income") {
    text = "entrada";
  } else {
    text = "saída";
  }

  function launchValue(e){
    e.preventDefault();
    setEnable(true);

    const newLauch = {
        name: userData.name,
        value,
        description,
        type,
        date: dayjs().format("DD/MM")
    }

    axios
    .post(`${URL_BASE}/launch`, newLauch, config)
    .then((res) => {
        navigate("/wallet")
    })
    .catch((err) => {
        alert(err.response.data.message);
        setEnable(false);
    })
  }

  return (
    <PageLauch disable={enable ? "none" : ""}>
      <h2>Nova {text}</h2>
      <form onSubmit={launchValue}>
        <input
          type="number"
          disabled={enable}
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          type="text"
          disabled={enable}
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={enable}>
          <p>Salvar {text}</p>
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
    </PageLauch>
  );
}

const PageLauch = styled.div`
  background-color: #8c11be;
  height: 100vh;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway", sans-serif;

  p{
    display: ${(props) => props.disable}
  }

  h2 {
    width: 326px;
    margin: 30px 0;
    font-size: 26px;
    color: #ffffff;
    font-weight: 700;
    text-align: left;
  }

  form {
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

    button {
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
      font-weight: 700;
      font-size: 20px;

      :hover{
        cursor: pointer;
      }
    }
  }
`;
