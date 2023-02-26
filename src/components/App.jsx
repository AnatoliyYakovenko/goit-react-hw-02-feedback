import React, {Component} from "react";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Container} from './Container/Container';
import {Section} from './Section/Section';
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";


export class App  extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  handleClick = event => {
    const {name} = event.target;
    this.setState(state => ({[name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
            {total !== 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
             />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
      </div>
    );
  }
};
