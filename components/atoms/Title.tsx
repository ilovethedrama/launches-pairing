import styles from '../../styles/Title.module.scss';

const Title = ({ text, isSubtitle }) => {
  if (isSubtitle) {
    return <h3 className={styles.subTitle}>{text}</h3>;
  }
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
