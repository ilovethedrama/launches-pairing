import styles from '../../styles/TimeStamp.module.scss';

const TimeStamp = ({ text }) => {
  return <span className={styles.timeStamp}>{text}</span>;
};

export default TimeStamp;
