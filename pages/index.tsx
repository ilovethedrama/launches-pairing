import styles from '../styles/Home.module.css';

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
      <h2>Time and Space: A Space X Catalogue</h2>
      {spaceData.map((item) => (
        <div key={item.flight_number}>{item.mission_name}</div>
      ))}
    </div>
  );
};

export default Home;
