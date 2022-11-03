import styles from '../../styles/DetailText.module.scss';

const DetailText = ({ strongText, standardText }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        <strong>{strongText}</strong>
      </span>
      <span className={styles.title}>{standardText}</span>
    </div>
  );
};

export default DetailText;
