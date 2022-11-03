export interface launchMissionFull {
  flight_number: number;
  launch_date_utc: string;
  mission_name: string;
  launch_success: boolean;
  launch_failure_details: launchFailDetails | null;
  rocket: {
    first_stage: { cores: coreDetails[] };
    second_stage: { payloads: payloadDetails[] };
  };
  links: {
    mission_patch_small: string;
  };
}

export interface launchMissionSummary {
  launch_date_utc: string;
  mission_name: string;
  launch_success: boolean;
  launch_failure_details: launchFailDetails | null;
  rocket: {
    first_stage: { cores: coreDetails[] };
    second_stage: { payloads: payloadDetails[] };
  };
}

export interface launchFailDetails {
  time: number;
  altitude: number;
  reason: string;
}

export interface coreDetails {
  core_serial: string;
}

export interface payloadDetails {
  payload_id: string;
  payload_type: string;
}
