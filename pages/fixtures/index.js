import Link from 'next/link';
import { useState } from 'react';
import { sportData } from '../util/data.js';

export default function Fixtures() {
  const [date, setDate] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [matches, setMatches] = useState(sportData);

  function handleSubmit(event) {
    event.preventDefault();

    setMatches([
      ...matches,
      {
        id: JSON.stringify(matches.length + 1),
        dateVenue: date,
        homeTeam: { officialName: homeTeam },
        awayTeam: { officialName: awayTeam },
      },
    ]);
  }
  console.log('matches', matches);
  return (
    <div className="fixtures">
      <h1>AFC Champions League</h1>
      <ul className="games">
        {matches.map((data) => {
          return (
            <div key={`fixture-li-${data.id}`} className="teams">
              <li>Date: {data.dateVenue}</li>
              <div>
                <div className="home">
                  <li>
                    {data.homeTeam && data.homeTeam.officialName.toUpperCase()}{' '}
                    -
                  </li>
                  <li>{data.result && data.result.homeGoals}</li>
                </div>
                <div className="versus">
                  <span>vs</span>
                </div>
                <div className="away">
                  <li>
                    {data.awayTeam && data.awayTeam.officialName.toUpperCase()}{' '}
                    -
                  </li>
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
      <form onSubmit={handleSubmit}>
        <input
          value={date}
          type="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          value={homeTeam}
          placeholder="Home Team"
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          value={awayTeam}
          placeholder="Away Team"
          onChange={(e) => setAwayTeam(e.target.value)}
        />
        <button>add</button>
      </form>
      <Link href="/">home</Link>
    </div>
  );
}
