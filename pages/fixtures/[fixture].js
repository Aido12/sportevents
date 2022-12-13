export default function Fixture(props) {
  return (
    <div>
      <ul className="gameInfo">
        <li>Season: {props.singleData.season}</li>
        <li>Time: {props.singleData.timeVenueUTC}</li>
        <li>Date: {props.singleData.dateVenue}</li>
      </ul>
      <h3>Status: {props.singleData.status.toUpperCase()}</h3>
      <br />
      <div className="singleGame">
        <div className="homeTeam">
          <h1>
            {props.singleData.homeTeam?.officialName.toUpperCase() || 'TBD'}
          </h1>
          <ul className="homeStats">
            <li>Goals: {props.singleData.result?.homeGoals || ''}</li>
          </ul>
        </div>
        <div>
          <h2>vs</h2>
        </div>
        <div className="awayTeam">
          <h1>{props.singleData.awayTeam.officialName.toUpperCase()}</h1>
          <ul className="homeStats">
            <li>Goals: {props.singleData.result.awayGoals}</li>
          </ul>
        </div>
      </div>
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
