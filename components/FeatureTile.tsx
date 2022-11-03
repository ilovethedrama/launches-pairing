import TileImage from './atoms/TileImage';
import TileText from './molecules/TileText';
import styles from '../styles/FeatureTile.module.scss';
import { launchMissionFull } from '../mission';

const FeatureTile = ({ ...props }: launchMissionFull) => {
  return (
    <div className={styles.wrapper}>
      <TileImage
        src={props.links.mission_patch_small}
        alt={`spaceX rocket patch for space mission ${props.mission_name}`}
      ></TileImage>
      <TileText
        {...(props as Pick<
          launchMissionFull,
          'launch_date_utc' | 'launch_failure_details' | 'rocket' | 'launch_success' | 'mission_name'
        >)}
      />
    </div>
  );
};

export default FeatureTile;
