import React, { Component } from 'react';
import Question from './Question'
import PropTypes from "prop-types";

class Questions extends Component {
  handleAnswer = (id, answer) => {
    this.props.onAnswer(id, answer);
  };
  render() {
    const { questions } = this.props;

    return(
      <div className="questions">
        {questions.map(({ id, title, answers }) => {
          return(
            <Question 
              id={id}
              key={id}
              title={title}
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