import React, { Component } from  'react';
import PropTypes from "prop-types";
import _ from "lodash";

class Question extends Component {
  handleAnswer = (answer) => () => {
    const { id } = this.props;
    this.props.onAnswer(id, answer)
  }

  render() {
    const { id, title, answers, selected } = this.props

    return(
      <div className={`question ${selected ? "selected" : ""}`}>
        <h5>Cau {id}: {title}</h5>
        {
          _.keys(answers).map((k) => {
            return (
              <p key={k} onClick={this.handleAnswer(k)}>{k}: {answers[k]}</p>
            )
          })
        }
      </div>
    )
  }
}

Question.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  answers: PropTypes.object,
};

export default Question;
