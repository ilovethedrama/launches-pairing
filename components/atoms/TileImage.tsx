import Image from 'next/image';
import styles from '../../styles/ImageTile.module.scss';

const TileImage = ({ src, alt }) => {
  if (!src) {
    return <p>No image available</p>;
  }
  return <Image src={src} alt={alt} className={styles.imageSmall} width="100" height="50" />;
};

export default TileImage;
