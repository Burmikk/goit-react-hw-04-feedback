import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import styles from './feedBack.module.scss';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleMakeFeedback = item => {
    setState(prevState => {
      return { ...prevState, [item]: prevState[item] + 1 };
    });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((state.good * 100) / total);
  };

  const keys = Object.keys(state);

  return (
    <div className={styles.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleMakeFeedback} options={keys} />
      </Section>
      <Section title={'Statistics'}></Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </div>
  );
};

export default Feedback;
