import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, positivePercentage, children }) => {
  const total = `${good + neutral + bad}`;
  const statisticInfo = (
    <div className={styles.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback: {positivePercentage()} %</p>
    </div>
  );

  return <>{total === '0' ? children : statisticInfo}</>;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default Statistics;
