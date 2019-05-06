import React, { Component } from 'react';
import _ from "lodash";
import Question from './Question'
import PropTypes from "prop-types";

class Questions extends Component {
  handleAnswer = (id, answer) => {
    this.props.onAnswer(id, answer);
  }
  render() {
    const { questions, myAnswers } = this.props;

    return(
      <div className="questions">
        {questions.map(({ id, title, answers }, index) => {
          return(
            _.keys(myAnswers).length === index &&
            <Question 
              id={id}
              key={id}
              title={title}
              myAnswer={myAnswers[id]}
              answers={answers}
              onAnswer={this.handleAnswer}
            />
          )
        })}
      </div>
    )
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
}

export default Questions;