import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questions } from "../../data/questions";
import { addNewUserEvent, removeUserEvent } from "../../store/memory.reducer";
import Interpreter from "../../interpreter"; 
import { rules } from "../../data/rules";

export default function AskingSection({ setSubmit }) {

  const dispatch = useDispatch();
  const { movies, userEvents } = useSelector((state) => state.memory);
  const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);

  const handleNextButton = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setSubmit(Interpreter(movies, userEvents, rules));
      return; 
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const handlePrevButton = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  const isUserEventExisted = (alias, value) => {
    return userEvents[alias].includes(value);
  }

  const handleAnswerSelect = (inputValue, alias, answersType) => {
    if (answersType === "checkbox") {
      if (isUserEventExisted(alias, inputValue)) {
        dispatch(removeUserEvent({inputValue, alias})); 
        return;
      }
    }
    dispatch(addNewUserEvent({inputValue, alias, answersType}));
  }

  console.log(userEvents);

  return (
    <>
      <div className="sidebar__question">
        <p>{`${questions[currentQuestionIndex].question}?`}</p>
        <div className="sidebar__question-answers"> {
          questions[currentQuestionIndex].values.map((value, i) => (
            questions[currentQuestionIndex].valuesType === "radio" ? 
            <label key={i} checked={false} className="question__answer radio">{value.description}
              <input 
                type="radio" name="radio" 
                onChange={() => handleAnswerSelect(value.symbol, questions[currentQuestionIndex].alias, "radio")} />
              <span className="radio__checkmark"></span>
            </label> : 
            <button 
              className={`question__answer checkbox${isUserEventExisted(questions[currentQuestionIndex].alias, value.symbol) ? " checked" : ""}`} 
              key={i} 
              onClick={() => handleAnswerSelect(value.symbol, questions[currentQuestionIndex].alias, "checkbox")}>
              <span>{value.description}</span>
            </button>
          )) 
        }
        </div>
      </div>
      <div className="sidebar__nav-buttons">
        { 
          currentQuestionIndex !== 0 &&
          <button className="sidebar__prev-button" onClick={handlePrevButton}>
            <ion-icon name="arrow-back" />
          </button> 
        }
        <button className={`sidebar__next-button${currentQuestionIndex !== 0 ? " md-left" : ""}`} onClick={handleNextButton}>
          <ion-icon name={currentQuestionIndex === questions.length - 1 ? "checkmark" : "arrow-forward"} />
        </button>
      </div>
    </>
  )
}