import FeatureTile from '../components/FeatureTile';
import styles from '../styles/Home.module.scss';
import Title from '../components/atoms/Title';
import { launchMissionFull } from '../mission';

export async function getStaticProps() {
  const res = await fetch('https://api.spacexdata.com/v3/launches?page=1&limit=10');
  const data: Array<launchMissionFull> = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { spaceData: data },
  };
}

const Home = ({ spaceData }: { spaceData: launchMissionFull[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          <Title text={'Time and Space: A Space X Catalogue'}></Title>
        </div>
        <div className={styles.main}>
          {spaceData.map(
            ({
              flight_number,
              launch_date_utc,
              mission_name,
              launch_success,
              launch_failure_details,
              rocket,
              links,
            }) => {
              const props = Object.assign({
                launch_date_utc,
                mission_name,
                launch_success,
                launch_failure_details,
                rocket,
                links,
              });
              return (
                <div key={flight_number}>
                  <FeatureTile {...props}></FeatureTile>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
