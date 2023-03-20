import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';
import axios from 'axios';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return {
    type: MOVE_CLOCKWISE,
    payload: 1
  }
 }

export function moveCounterClockwise() {
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: -1
  }
 }

export function selectAnswer(inputed) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: inputed
  }
 }

export function setMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message
  }
 }

export function setQuiz(currentQuiz) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: currentQuiz
  }
 }

export function inputChange(value, value2) {
  return {
    type: INPUT_CHANGE,
    payload: value, value2
  }
 }

export function resetForm() {
  return {
    type: RESET_FORM
  }
 }

// ❗ Async action creators
export function fetchQuiz(quiz) {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: SET_QUIZ_INTO_STATE, payload: null });
    axios.get(`http://localhost:9000/api/quiz/next`)
    .then (res => {
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data })
    })
    .catch(err => console.error(err))
  }
}
export function postAnswer(data) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    dispatch({ type: SET_SELECTED_ANSWER, payload: null });
    axios.post(`http://localhost:9000/api/quiz/answer`, data)
    .then (res => {
      dispatch({ type: SET_INFO_MESSAGE, payload: res.data.message })
    })
    .catch(err => console.error(err))
  }
}
export function postQuiz(data) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post(`http://localhost:9000/api/quiz/new`, data)
    .then (res => {
      dispatch({ type: SET_INFO_MESSAGE, payload: `Congrats "${res.data.question}" is a great question!`})
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
