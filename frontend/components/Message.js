import React from 'react'
import { connect } from 'react-redux';

function Message(props) {

  // const { infoMessage } = props;

  return <div id="message">{props.infoMessage}</div>
}

// const mapStateToProps = state => {
//   return {
//     infoMessage: state.infoMessage.infoMessage
//   }
// }

export default connect(s => s)(Message);