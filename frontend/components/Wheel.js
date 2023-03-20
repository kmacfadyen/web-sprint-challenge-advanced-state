import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import { connect } from 'react-redux';
// import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types';


function Wheel(props) {

  const { currentWheel, moveClockwise, moveCounterClockwise } = props;


  const handleClockwise = () => {
    moveClockwise();
  }

  const handleCounterClockwise = () => {
    moveCounterClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={currentWheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{currentWheel === 0 ? "B" : ''}</div>
        <div className={currentWheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{currentWheel === 1 ? "B" : ''}</div>
        <div className={currentWheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{currentWheel === 2 ? "B" : ''}</div>
        <div className={currentWheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{currentWheel === 3 ? "B" : ''}</div>
        <div className={currentWheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{currentWheel === 4 ? "B" : ''}</div>
        <div className={currentWheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{currentWheel === 5 ? "B" : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentWheel: state.wheel.currentWheel
  }
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);