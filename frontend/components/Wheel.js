import React from 'react'
import * as actionCreators from '../state/action-creators';
import { connect } from 'react-redux';
// import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';


function Wheel(props) {

  const { moveClockwise, moveCounterClockwise } = props;


  // const handleClockwise = () => {
  //   moveClockwise();
  // }

  // const handleCounterClockwise = () => {
  //   moveCounterClockwise();
  // }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{props.wheel === 0 ? "B" : ''}</div>
        <div className={props.wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{props.wheel === 1 ? "B" : ''}</div>
        <div className={props.wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{props.wheel === 2 ? "B" : ''}</div>
        <div className={props.wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{props.wheel === 3 ? "B" : ''}</div>
        <div className={props.wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{props.wheel === 4 ? "B" : ''}</div>
        <div className={props.wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{props.wheel === 5 ? "B" : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     currentWheel: state.wheel.currentWheel
//   }
// }

export default connect(s => s, actionCreators)(Wheel);