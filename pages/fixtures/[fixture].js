import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Fixture(props) {
  return (
    <div className="single-fix-header">
      <Header />
      <div className="single-fixture-main">
        <div className="single-fixture-content">
          <h2>{props.singleData.originCompetitionName}</h2>
          <ul className="gameInfo">
            <li>Season: {props.singleData.season}</li>
            <li>Time: {props.singleData.timeVenueUTC}</li>
            <li>Date: {props.singleData.dateVenue}</li>
            <li>Stage: {props.singleData.stage.name}</li>
          </ul>
          <h3>Status: {props.singleData.status.toUpperCase()}</h3>
          <br />
          <div className="singleGame">
            <div className="homeTeam">
              <h3>
                {props.singleData.homeTeam?.officialName.toUpperCase() || 'TBC'}
              </h3>
              <ul className="stats">
                <li>Goals: {props.singleData.result.homeGoals || 'TBD'}</li>
                <li>Single &#129000;: {props.singleData.result.yellowCards}</li>
                <li>
                  Double &#129000;:
                  {props.singleData.result.secondYellowCards}
                </li>
                <li>
                  Direct &#128997;:
                  {props.singleData.result.directRedCards}
                </li>
              </ul>
            </div>
            <div>
              <h2>vs</h2>
            </div>
            <div className="awayTeam">
              <h3>
                {props.singleData.awayTeam?.officialName.toUpperCase() || 'TBC'}
              </h3>
              <ul className="stats">
                <li>Goals: {props.singleData.result.awayGoals || 'TBD'}</li>
                <li>Single &#129000;: {props.singleData.result.yellowCards}</li>
                <li>
                  Double &#129000;:
                  {props.singleData.result.secondYellowCards}
                </li>
                <li>
                  Direct &#128997;:
                  {props.singleData.result.directRedCards}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { sportData } = await import('../util/data');

  const idFromUrl = context.query.fixture;
  console.log(idFromUrl);
  const singleData = sportData.find((data) => {
    return idFromUrl === data.id;
  });
  return {
    props: {
      singleData,
    },
  };
}
