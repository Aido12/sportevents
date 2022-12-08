import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Fixtures(props) {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);

  const handleInput = () => {
    setShowName(true);
  };
  return (
    <div className="fixtures">
      <h1>Fixtures</h1>
      {/* <input
        placeholder="player name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleInput()}> input</button>
      {showName && <span>{name}</span>}
      <Link href="/">home</Link> */}
      <ul className="games">
        {props.data.map((data) => {
          return (
            <div key={`fixture-li-${data.id}`} className="teams">
              <li>Date: {data.dateVenue}</li>
              <div>
                <div className="home">
                  <li>{data.homeTeam && data.homeTeam.officialName} - </li>
                  <li>{data.result && data.result.homeGoals}</li>
                </div>
                <div className="versus">
                  <span>vs</span>
                </div>
                <div className="away">
                  <li>{data.awayTeam && data.awayTeam.officialName} - </li>
                  <li>{data.result && data.result.awayGoals}</li>
                </div>
                <div className="info">
                  <li>
                    <Link href={`/fixtures/${data.id}`}>more info</Link>
                  </li>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await import('../util/data');

  console.log(data);
  return {
    props: {
      data,
    },
  };
}
