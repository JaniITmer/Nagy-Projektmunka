import React, { useState } from "react";
import "./styles/NewQuestionnaire.css";
import "./styles/Login.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewQuestionnaire({ loggedIn }) {
  const [values, setValues] = useState({
    category: "",
    title: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    option1_1: "",
    option1_2: "",
    option1_3: "",
    option1_4: "",
    option2_1: "",
    option2_2: "",
    option2_3: "",
    option2_4: "",
    option3_1: "",
    option3_2: "",
    option3_3: "",
    option3_4: "",
    option4_1: "",
    option4_2: "",
    option4_3: "",
    option4_4: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //const [errors, setErrors] = useState({})
  /*const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }*/
  const handleInput = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !values.category ||
      !values.title ||
      !values.question1 ||
      !values.option1_1 ||
      !values.option1_2 ||
      !values.option1_3 ||
      !values.option1_4 ||
      !values.question2 ||
      !values.option2_1 ||
      !values.option2_2 ||
      !values.option2_3 ||
      !values.option2_4 ||
      !values.question3 ||
      !values.option3_1 ||
      !values.option3_2 ||
      !values.option3_3 ||
      !values.option3_4 ||
      !values.question4 ||
      !values.option4_1 ||
      !values.option4_2 ||
      !values.option4_3 ||
      !values.option4_4
    ) {
      setError("Mindent ki kell tölteni.");
      return;
    }

    // Minden mező kitöltve, hibaüzenet törlése
    setError("");

    //setErrors(validation(values));
    axios
      .post("http://localhost:8080/new_questionnaire", values)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-page">
      <div className="topics">
        <h1 className="newQues-H1">Új kérdőív hozzáadása</h1>

        <form className="inputs" action="" onSubmit={handleSubmit}>
          <div className="category">
            <label className="newQues-label" htmlFor="category">
              Téma
            </label>
            <input
              type="text"
              id="category"
              className="newQues-inputH1"
              placeholder="Téma"
              name="category"
              onChange={handleInput}
            />
          </div>

          <div className="title">
            <label className="newQues-label" htmlFor="title">
              Cím
            </label>
            <input
              type="text"
              id="title"
              className="newQues-inputH1"
              placeholder="cím"
              name="title"
              onChange={handleInput}
            />
          </div>
          <div className="newQues-div2">
            <div className="question1">
              <label className="newQues-label" htmlFor="question1">
                Kérdés1
              </label>
              <input
                type="text"
                id="question1"
                className="newQues-inputQues"
                placeholder="kérdés1"
                name="question1"
                onChange={handleInput}
              />
            </div>
            <div className="option1_1">
              <label className="newQues-label" htmlFor="option1_1">
                Válasz1_1
              </label>
              <input
                type="text"
                id="option1_1"
                className="newQues-inputAns"
                placeholder="válasz1_1"
                name="option1_1"
                onChange={handleInput}
              />
            </div>
            <div className="option1_2">
              <label className="newQues-label" htmlFor="option1_2">
                Válasz1_2
              </label>
              <input
                type="text"
                id="option1_2"
                className="newQues-inputAns"
                placeholder="válasz1_2"
                name="option1_2"
                onChange={handleInput}
              />
            </div>
            <div className="option1_3">
              <label className="newQues-label" htmlFor="option1_3">
                Válasz1_3
              </label>
              <input
                type="text"
                id="option1_3"
                className="newQues-inputAns"
                placeholder="válasz1_3"
                name="option1_3"
                onChange={handleInput}
              />
            </div>
            <div className="option1_4">
              <label className="newQues-label" htmlFor="option1_4">
                Válasz1_4
              </label>
              <input
                type="text"
                id="option1_4"
                className="newQues-inputAns"
                placeholder="válasz1_4"
                name="option1_4"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="newQues-div2">
            <div className="question2">
              <label className="newQues-label" htmlFor="question2">
                Kérdés2
              </label>
              <input
                type="text"
                id="question2"
                className="newQues-inputQues"
                placeholder="kérdés2"
                name="question2"
                onChange={handleInput}
              />
            </div>
            <div className="option2_1">
              <label className="newQues-label" htmlFor="option2_1">
                Válasz2_1
              </label>
              <input
                type="text"
                id="option2_1"
                className="newQues-inputAns"
                placeholder="válasz2_1"
                name="option2_1"
                onChange={handleInput}
              />
            </div>
            <div className="option2_2">
              <label className="newQues-label" htmlFor="option2_2">
                Válasz2_2
              </label>
              <input
                type="text"
                id="option2_2"
                className="newQues-inputAns"
                placeholder="válasz2_2"
                name="option2_2"
                onChange={handleInput}
              />
            </div>
            <div className="option2_3">
              <label className="newQues-label" htmlFor="option2_3">
                Válasz2_3
              </label>
              <input
                type="text"
                id="option2_3"
                className="newQues-inputAns"
                placeholder="válasz2_3"
                name="option2_3"
                onChange={handleInput}
              />
            </div>
            <div className="option2_4">
              <label className="newQues-label" htmlFor="option2_4">
                Válasz2_4
              </label>
              <input
                type="text"
                id="option2_4"
                className="newQues-inputAns"
                placeholder="válasz2_4"
                name="option2_4"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="newQues-div2">
            <div className="question3">
              <label className="newQues-label" htmlFor="question3">
                Kérdés3
              </label>
              <input
                type="text"
                id="question3"
                className="newQues-inputQues"
                placeholder="kérdés3"
                name="question3"
                onChange={handleInput}
              />
            </div>
            <div className="option3_1">
              <label className="newQues-label" htmlFor="option3_1">
                Válasz3_1
              </label>
              <input
                type="text"
                id="option3_1"
                className="newQues-inputAns"
                placeholder="válasz3_1"
                name="option3_1"
                onChange={handleInput}
              />
            </div>
            <div className="option3_2">
              <label className="newQues-label" htmlFor="option3_2">
                Válasz3_2
              </label>
              <input
                type="text"
                id="option3_2"
                className="newQues-inputAns"
                placeholder="válasz3_2"
                name="option3_2"
                onChange={handleInput}
              />
            </div>
            <div className="option3_3">
              <label className="newQues-label" htmlFor="option3_3">
                Válasz3_3
              </label>
              <input
                type="text"
                id="option3_3"
                className="newQues-inputAns"
                placeholder="válasz3_3"
                name="option3_3"
                onChange={handleInput}
              />
            </div>
            <div className="option3_4">
              <label className="newQues-label" htmlFor="option3_4">
                Válasz3_4
              </label>
              <input
                type="text"
                id="option3_4"
                className="newQues-inputAns"
                placeholder="válasz3_4"
                name="option3_4"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="newQues-div2">
            <div className="question4">
              <label className="newQues-label" htmlFor="question4">
                Kérdés4
              </label>
              <input
                type="text"
                id="question4"
                className="newQues-inputQues"
                placeholder="kérdés4"
                name="question4"
                onChange={handleInput}
              />
            </div>
            <div className="option4_1">
              <label className="newQues-label" htmlFor="option4_1">
                Válasz4_1
              </label>
              <input
                type="text"
                id="option4_1"
                className="newQues-inputAns"
                placeholder="válasz4_1"
                name="option4_1"
                onChange={handleInput}
              />
            </div>
            <div className="option4_2">
              <label className="newQues-label" htmlFor="option4_2">
                Válasz4_2
              </label>
              <input
                type="text"
                id="option4_2"
                className="newQues-inputAns"
                placeholder="válasz4_2"
                name="option4_2"
                onChange={handleInput}
              />
            </div>
            <div className="option4_3">
              <label className="newQues-label" htmlFor="option4_3">
                Válasz4_3
              </label>
              <input
                type="text"
                id="option4_3"
                className="newQues-inputAns"
                placeholder="válasz4_3"
                name="option4_3"
                onChange={handleInput}
              />
            </div>
            <div className="option4_4">
              <label className="newQues-label" htmlFor="option4_4">
                Válasz4_4
              </label>
              <input
                type="text"
                id="option4_4"
                className="newQues-inputAns"
                placeholder="válasz4_4"
                name="option4_4"
                onChange={handleInput}
              />
            </div>
          </div>

          <button className="newQues-button" type="submit">
            Kérdőív hozzáadás
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
