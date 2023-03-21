import React from 'react'
import { useEffect } from 'react'
import * as actionCreators from '../state/action-creators';
import { connect } from 'react-redux';
// import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

function Quiz(props) {

  const { fetchQuiz, quiz } = props

  if (!props.selectedAnswer) {
  useEffect(() => {
    // if (!props.quiz) {
      fetchQuiz();
    // }
  }, []);
}

  // const { questionChoice, questionID, answerChoice, answerID } = props.quiz;

  // const chosenAnswer = props.chosenAnswer;

  const handleSelection = (evt) => {
    const { selectAnswer } = props
    selectAnswer(evt.target.id);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { postAnswer, quiz, selectedAnswer } = props

    postAnswer({ 
      quiz_id: quiz.quiz_id,
      selectedAnswer
    });
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            {console.log(quiz)}
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={props.selectedAnswer === quiz.answers[0].answer_id ? "answer selected" : "answer"}>
                {quiz.answers[0].text}
                <button id={quiz.answers[0].answer_id} onClick={handleSelection}>
                  {props.selectedAnswer === quiz.answers[0].answer_id ? "SELECTED" : 'Select'}
                </button>
              </div>

              <div className={props.selectedAnswer === quiz.answers[1].answer_id ? "answer selected" : "answer"}>
                {quiz.answers[1].text}
                <button id={quiz.answers[1].answer_id} onClick={handleSelection}>
                  {props.selectedAnswer === quiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={props.selectedAnswer ? false : true}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


export default connect(s => s, actionCreators)(Quiz);