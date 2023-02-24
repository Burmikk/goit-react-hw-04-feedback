import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styles from './feedBack.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleMakeFeedback = item => {
    // const { name } = event.target;
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    // const values = Object.values(this.state);
    // return values.reduce((total, value) => total + value);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / total);
  };
  render() {
    const keys = Object.keys(this.state);
    // const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.handleMakeFeedback}
            options={keys}
          />
        </Section>
        <Section title={'Statistics'}></Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </div>
    );
  }
}
export default Feedback;
