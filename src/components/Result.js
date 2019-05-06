import React, { Component } from 'react';
import _ from "lodash";
import PropTypes from "prop-types";

class Result extends Component {
  getNoOfCorrectAnswer = () => {
    const { correctAnswers, answers } = this.props; 
    let res = 0;
    _.forEach(_.keys(correctAnswers), id => {
      if(correctAnswers[id] === answers[id]) {
        res++;
      }
    })
    return res;
  };
  getScore = () => {
    const { correctAnswers } = this.props; 
    return _.round((this.getNoOfCorrectAnswer() / _.keys(correctAnswers).length) * 10);
  };
  render() {
    
    return (
      <div>
        <p>Correct Answer: {this.getNoOfCorrectAnswer()}</p>
        <p>Score: {this.getScore()}</p>
      </div>
    )
  }
}

Result.propTypes = {
}

export default Result;