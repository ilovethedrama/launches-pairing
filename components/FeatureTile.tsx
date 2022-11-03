import TileImage from './atoms/TileImage';
import TileText from './molecules/TileText';
import styles from '../styles/FeatureTile.module.scss';
import { launchMission } from '../mission';

const FeatureTile = ({ ...props }: launchMission) => {
  return (
    <div className={styles.wrapper}>
      <TileImage src={props.links.mission_patch_small} alt={'rocket patch'}></TileImage>
      <TileText
        {...(props as Pick<
          launchMission,
          'launch_date_utc' | 'launch_failure_details' | 'rocket' | 'launch_success' | 'mission_name'
        >)}
      />
    </div>
  );
};

export default FeatureTile;
