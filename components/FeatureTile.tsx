import TextTile from './molecules/TextTile';
import styles from '../styles/FeatureTile.module.scss';
import { launchMissionFull } from '../mission';
import Badge from './molecules/Badge';

const FeatureTile = ({ ...props }: launchMissionFull) => {
  return (
    <div className={styles.wrapper}>
      <Badge {...props}></Badge>
      <TextTile
        {...(props as Pick<
          launchMissionFull,
          'launch_date_utc' | 'launch_failure_details' | 'rocket' | 'launch_success' | 'mission_name'
        >)}
      />
    </div>
  );
};

export default FeatureTile;
