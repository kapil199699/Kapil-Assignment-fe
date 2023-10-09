import React, { useEffect, useState } from "react";
import "./quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Quiz = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/latestQuiz");
    if (response.ok) {
      let latestQuizdata = await response.json();
      setData(latestQuizdata);
    } else {
      let message = await response.json();
      alert(message);
    }
  };

  let quizLeftData = [
    {
      id: 1,
      image:
        "https://im.indiatimes.in/content/2023/Oct/FotoJet---2023-10-05T140002421_651e7435ccdad.jpg?w=939&h=486&cc=1",
      text: "Ode To Dumbledore! How Well Do You Know The Beloved Professor? Answer 10 Questions To Find Out",
    },
  ];

  return (
    <div>
      <div className="quiz">
        {quizLeftData.map((item) => (
          <div className="quiz-left" key={item.id}>
            <div className="quiz-img">
              <img src={item.image} alt="" />
            </div>
            <div className="quiz-text">
              <h2>{item.text}</h2>
            </div>
            <div className="quiz-save">
              <FontAwesomeIcon icon={faBookmark} size="2x" />
            </div>
          </div>
        ))}

        <div className="quiz-right">
          {data.map((item) => (
            <>
              <div className="quiz-right-card" key={item.id}>
                <div className="qrImage">
                  <img src={item.image} alt="" />
                </div>
                <div className="qrtext">
                  <div className="qrTitle">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="qrDescription">
                    <p>{item.description}</p>
                  </div>
                  <div className="qrSave">
                    <img src={item.save} alt="" />
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
