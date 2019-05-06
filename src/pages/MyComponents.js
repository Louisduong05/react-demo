import React, { Component, Fragment } from "react";
import Questions from "../components/Questions"

class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }
  handleAnswer = (id, answer) => {
    this.setState(state => ({
      answers: {
        ...this.state.answers,
        [id]: answer
      },
    }));
  };
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Questions
          questions={[
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
          ]}
          onAnswer={this.handleAnswer}
        />
      </Fragment>
    );
  }
}

export default MyComponents;
