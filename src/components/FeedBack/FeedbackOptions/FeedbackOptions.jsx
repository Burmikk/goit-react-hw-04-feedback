import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.scss';
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const button = options.map(item => (
    <li key={nanoid(2)}>
      <button
        className={`${styles.btn} ${styles[item]}`}
        name={item}
        onClick={() => onLeaveFeedback(item)}
      >
        {item}
      </button>
    </li>
  ));
  return <ul className={styles.list}>{button}</ul>;
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
