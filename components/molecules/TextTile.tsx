import styles from '../../styles/TextTile.module.scss';
import DetailText from '../atoms/DetailText';
import Title from '../atoms/Title';
import { format } from 'date-fns';
import { launchMissionSummary } from '../../mission';

const TextTile = ({ ...props }: launchMissionSummary) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>
        <DetailText
          strongText={'Launch date:'}
          standardText={format(new Date(props.launch_date_utc), 'PPPP') ?? 'Unknown'}
        ></DetailText>
        <DetailText
          strongText={'Core serial:'}
          standardText={props.rocket.first_stage?.cores[0].core_serial ?? 'Unknown'}
        ></DetailText>
        <DetailText
          strongText={'Payload ID:'}
          standardText={props.rocket.second_stage?.payloads[0].payload_id ?? 'Unknown'}
        ></DetailText>
        <DetailText
          strongText={'Payload type:'}
          standardText={props.rocket.second_stage?.payloads[0].payload_type ?? 'Unknown'}
        ></DetailText>
        <DetailText strongText={'Launch success:'} standardText={props.launch_success}></DetailText>
        {!props.launch_success && (
          <>
            <Title text={'Launch failure details'} isSubtitle></Title>
            <div>
              <DetailText
                strongText={'Time:'}
                standardText={props.launch_failure_details?.time ?? 'Unknown'}
              ></DetailText>
              <DetailText
                strongText={'Altitude:'}
                standardText={props.launch_failure_details?.altitude ?? 'Unknown'}
              ></DetailText>
              <DetailText
                strongText={'Reason:'}
                standardText={props.launch_failure_details?.reason ?? 'Unknown'}
              ></DetailText>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextTile;
