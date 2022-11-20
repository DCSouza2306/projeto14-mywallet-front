import styled from "styled-components";

export default function Lauch({ date, description, value, type }) {
  return (
    <LauchPage color={type==="income"? "#03AC00": "#C70000"}>
      <li>
        <div>
          <p className="date">{date} </p>
          <p className="description">{description} </p>
        </div>
        <p className="value">{parseFloat(value).toFixed(2)}</p>
      </li>
    </LauchPage>
  );
}

const LauchPage = styled.div`
  width: 326px;
  padding: 8px 15px;

  li {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
    }

    .description {
        margin-left: 5px
    }

    .date {
      color: #c6c6c6;
    }

    .value {
        color: ${(props) => props.color}
    }

    div {
      display: flex;
      justify-content: space-around;
    }
  }
`;
