import styles from '../../styles/TileText.module.scss';
import DetailText from '../atoms/DetailText';
import Title from '../atoms/Title';
import { format } from 'date-fns';
import { launchMissionSummary } from '../../mission';

const TileText = ({ ...props }: launchMissionSummary) => {
  return (
    <div className={styles.wrapper}>
      <Title text={props.mission_name}></Title>
      <div className={styles.textContent}>
        <DetailText text={`Core serial: ${props.rocket.first_stage?.cores[0].core_serial ?? 'Unknown'}`}></DetailText>
        <DetailText text={`Payload ID: ${props.rocket.second_stage?.payloads[0].payload_id ?? 'Unknown'}`}></DetailText>
        <DetailText
          text={`Payload type: ${props.rocket.second_stage?.payloads[0].payload_type ?? 'Unknown'}`}
        ></DetailText>
        <DetailText text={`Launch success: ${props.launch_success}`}></DetailText>
        {!props.launch_success && (
          <>
            <h3>Launch failure details</h3>
            <div>
              <DetailText text={`Reason: ${props.launch_failure_details?.reason ?? 'Unknown'}`}></DetailText>
              <DetailText text={`Time: ${props.launch_failure_details?.time ?? 'Unknown'}`}></DetailText>
              <DetailText text={`Altitude: ${props.launch_failure_details?.altitude ?? 'Unknown'}`}></DetailText>
            </div>
          </>
        )}
        <DetailText text={`Launch date: ${format(new Date(props.launch_date_utc), 'PPPP') ?? 'Unknown'}`}></DetailText>
      </div>
    </div>
  );
};

export default TileText;
