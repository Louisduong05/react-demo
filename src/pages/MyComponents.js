import React, { Component, Fragment } from "react";
import Questions from "../components/Questions"

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

class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
    };

    this.hanldeAnswer = this.hanldeAnswer.bind(this);
  }
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
    
    console.log(this.state)
    return (
      <Fragment>
        <Questions
          questions={data}
          myAnswers={answers}
          onAnswer={this.hanldeAnswer}         
        />
      </Fragment>
    );
  }
}

export default MyComponents;
