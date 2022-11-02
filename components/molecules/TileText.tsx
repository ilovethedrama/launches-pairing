import styles from '../../styles/TileText.module.scss';
import DetailText from '../atoms/DetailText';
import TimeStamp from '../atoms/TimeStamp';
import Title from '../atoms/title';

const TileText = () => {
  return (
    <div className={styles.wrapper}>
      <Title text={'Ye'}></Title>
      <div className={styles.textContent}>
        <DetailText text={'MoreText'}></DetailText>
        <TimeStamp text={'TimeHere'}></TimeStamp>
      </div>
    </div>
  );
};

export default TileText;
