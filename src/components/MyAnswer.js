import React, { Component } from 'react';
import _ from "lodash";
import PropTypes from "prop-types";

class MyAnswer extends Component {
  render() {
    const { showAnswers } = this.props;

    if (showAnswers) {
      return _.keys(showAnswers).map((k) => {
        return (
          <p key={k}> {k} : {showAnswers[k]} </p>
        )
      })
    }
  }
}

MyAnswer.propTypes = {
  showAnswers: PropTypes.object,
}

export default MyAnswer;