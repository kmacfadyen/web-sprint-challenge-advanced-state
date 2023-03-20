// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_COUNTERCLOCKWISE: {
      if (state === 0) {
        return state + 5;
      }
      else return state - action.payload;
    }
    case MOVE_CLOCKWISE: {
      if (state === 5) {
        return initialWheelState;
      }
      else return state + action.payload;
    }
  default: return state;
  }
}

const initialQuizState = {
  currentQuizState: null
}

function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        currentQuizState: action.payload
      }
  }
  return state;
}

const initialSelectedAnswerState = {
  currentSelectedAnswer: null
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        currentSelectedAnswer: action.payload
      }
  }
  return state
}

const initialMessageState = {
  currentMessage: ''
}

function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return {
        ...state,
        currentMessage: action.payload
      }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      }

    case RESET_FORM:
      return{
        ...state,
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: '',
      }
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
