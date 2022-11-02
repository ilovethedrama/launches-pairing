import FeatureTile from '../components/FeatureTile';
import styles from '../styles/Home.module.scss';
import Title from '../components/atoms/title';

export async function getStaticProps() {
  const res = await fetch('https://api.spacexdata.com/v3/launches');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { spaceData: data },
  };
}

const Home = ({ spaceData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          <Title text={'Time and Space: A Space X Catalogue'}></Title>
        </div>
        <div className={styles.main}>
          {spaceData.map((mission) => (
            <div key={mission.flight_number}>
              <FeatureTile src={mission.links.mission_patch_small} alt={'a rocket'}></FeatureTile>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
