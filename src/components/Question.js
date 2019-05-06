import React, { Component } from  'react';
import PropTypes from "prop-types";
import _ from "lodash";

class Answer extends Component {
  render() {
    const { id, value, myAnswer } = this.props

    return (
      <p key={id} onClick={this.props.onAnswer(id)} className={`answer ${myAnswer===id ? "selected" : ""}`}>{id}: {value}</p>
    )
  }
}
class Answers extends Component {
  render() {
    const { data, myAnswer } = this.props

    return _.keys(data).map((id) => {
      return (
        <Answer key={id} id={id} value={data[id]} onAnswer={this.props.onAnswer} myAnswer={myAnswer}/>
      )
    })
  }
}
class Question extends Component {
  hanldeAnswer = (answer) => () => {
    const { id } = this.props;
    this.props.onAnswer(id, answer)
  }

  render() {
    const { id, title, answers, myAnswer } = this.props

    return(
      <div>
        <h5>Cau {id}: {title}</h5>
        <Answers data={answers} onAnswer={this.hanldeAnswer} myAnswer={myAnswer}/>
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
