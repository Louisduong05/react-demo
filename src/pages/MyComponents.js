import React, { Component, Fragment } from "react";
import _ from "lodash";
import Questions from "../components/Questions";
import MyAnswer from "../components/MyAnswer";
import Result from "../components/Result";

const data = [
  { 
    id: 1,
    title: "Day la con gi ?",
    answers: {
      "A" : "Ga",
      "B" : "Voi",
    }
  },
  { 
    id: 2,
    title: "Day la vat gi ?",
    answers: {
      "A" : "To",
      "B" : "Chen",
    }
  },
  { 
    id: 3,
    title: "Day la ai ?",
    answers: {
      "A" : "Louis",
      "B" : "James",
    }
  }
]

const correctAnswers = {
  "1": "A",
  "2": "B",
  "3": "C",
}
const answers = {
  "1": "B",
  "2": "D",
  "3": "A",
}

class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
    };

    this.hanldeAnswer = this.hanldeAnswer.bind(this);
    this.isCompleted = this.isCompleted.bind(this);
  }

  isCompleted = () => {
    const { answers } = this.state;

    return _.keys(answers).length === data.length;
  };

  hanldeAnswer = (id, answer) => {
    this.setState(state => ({
      answers: {
        ...this.state.answers,
        [id]: answer
      }
    }))
  }

  render() {
    const { answers } = this.state; 

    return (
      <Fragment>
        <Questions
          questions={data}
          myAnswers={answers}
          onAnswer={this.hanldeAnswer}         
        />
        {this.isCompleted() && 
          <div>
            <MyAnswer
              showAnswers={answers}
            />
            <Result correctAnswers={correctAnswers} answers={answers}/>
          </div>
        }
      </Fragment>
    );
  }
}

export default MyComponents;
