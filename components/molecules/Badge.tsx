import styles from '../../styles/Badge.module.scss';
import TileImage from '../atoms/TileImage';
import Title from '../atoms/Title';
import { launchMissionFull } from '../../mission';

const Badge = ({ ...props }: launchMissionFull) => {
  return (
    <div className={styles.wrapper}>
      <TileImage
        src={props.links.mission_patch_small}
        alt={`spaceX rocket patch for space mission ${props.mission_name}`}
      ></TileImage>
      <Title text={props.mission_name}></Title>
    </div>
  );
};

export default Badge;
