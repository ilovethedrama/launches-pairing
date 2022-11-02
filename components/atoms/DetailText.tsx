import styles from '../../styles/DetailText.module.scss';

const DetailText = ({ text }) => {
  return <span className={styles.title}>{text}</span>;
};

export default DetailText;
