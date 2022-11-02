import TileText from './molecules/TileText';
import styles from '../styles/FeatureTile.module.scss';
import TileImage from './atoms/tileImage';

const FeatureTile = ({ src, alt }) => {
  return (
    <div className={styles.wrapper}>
      <TileImage src={src} alt={alt}></TileImage>
      <TileText />
    </div>
  );
};

export default FeatureTile;
