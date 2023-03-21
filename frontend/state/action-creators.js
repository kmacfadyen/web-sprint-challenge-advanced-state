// import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';
import * as types from './action-types';
import axios from 'axios';
import { Form } from '../components/Form';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return {
    type: types.MOVE_CLOCKWISE,
    payload: 1
  }
 }

export function moveCounterClockwise() {
  return {
    type: types.MOVE_COUNTERCLOCKWISE,
    payload: -1
  }
 }

export function selectAnswer(inputed) {
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: inputed
  }
 }

export function setMessage(message) {
  return {
    type: types.SET_INFO_MESSAGE,
    payload: message
  }
 }

export function setQuiz(currentQuiz) {
  return {
    type: types.SET_QUIZ_INTO_STATE,
    payload: currentQuiz
  }
 }

export function inputChange(value, value2) {
  return {
    type: types.INPUT_CHANGE,
    payload: value, value2
  }
 }

export function resetForm() {
  return {
    type: types.RESET_FORM
  }
 }

// ❗ Async action creators
export function fetchQuiz(data) {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: null });
    axios.get(`http://localhost:9000/api/quiz/next`)
    .then (res => {
      dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.data })
    })
    .catch(err => console.error(err))
  }
}
export function postAnswer(question, answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    axios.post(`http://localhost:9000/api/quiz/answer`, {'quiz_id': question, 'answer_id': answer})
    .then (res => {
      dispatch({ type: types.SET_SELECTED_ANSWER, payload: null })

      dispatch({ type: types.SET_INFO_MESSAGE, payload: res.data.message })
      dispatch(fetchQuiz())
    })
    .catch(err => console.error(err))
  }
}
export function postQuiz(form1) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post(`http://localhost:9000/api/quiz/new`, {'question_text': form1.newQuestion, 'true_answer_text': form1.newTrueAnswer, 'false_answer_text': form1.newFalseAnswer})
    .then (res => {
      const newQuestion = res.data
        dispatch({ type: types.SET_INFO_MESSAGE, payload: `Congrats: "${newQuestion.question}" is a great question!`})
        dispatch({ type: types.RESET_FORM })
    })
    .catch(err => console.error(err))
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
