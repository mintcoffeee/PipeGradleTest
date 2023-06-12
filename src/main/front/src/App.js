import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "./1.gif";

const App = () => {
  const [message, setMessage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    //비동기 fetch
    // fetch("http://localhost:8080/hello").then().then(); // proxy 설정 안했을 시, 풀 주소 입력
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setMessage(data);
      });

    axios
      .get("/list")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <header>
        <img src={img1} style={{ width: "200px" }} alt="" />
        <h1>TEST_7</h1>
        <ul style={{ listStyle: "none" }}>
          {message.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr />
        <section>
          <h2>스프링 부트로 /list 부터 받은 데이터 출력</h2>
          {data.map((item, index) => (
            <li key={index}>
              {item.name} : {item.addr} : {item.age} 살
            </li>
          ))}
        </section>
      </header>
    </div>
  );
};

export default App;
