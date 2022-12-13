import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
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

  const handelDelete = (index) => {
    matches.splice(index, 1);
    setMatches([...matches]);
  };
  return (
    <div>
      <Header />
      <div className="fixtures">
        <ul className="games">
          {matches.map((data, index) => {
            return (
              <div key={`fixture-li-${data.id}`} className="teams">
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => handelDelete(index)}
                >
                  x
                </button>
                <li>Date: {data.dateVenue}</li>
                <div>
                  <div className="home">
                    <li>
                      {data.homeTeam &&
                        data.homeTeam.officialName.toUpperCase()}
                      -
                    </li>
                    <li>{(data.result && data.result.homeGoals) || 'tbd'}</li>
                  </div>
                  <div className="versus">
                    <span>vs</span>
                  </div>
                  <div className="away">
                    <li>
                      {data.awayTeam &&
                        data.awayTeam.officialName.toUpperCase()}
                      -
                    </li>
                    <li>{data.result && data.result.awayGoals}</li>
                  </div>
                  <div className="info">
                    <li>
                      <Link className="more-info" href={`/fixtures/${data.id}`}>
                        more info
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
        <h2>Add Event Here</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Enter Date:
            <br />
            <input
              className="form-input"
              value={date}
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Enter Home Team:
            <br />
            <input
              className="form-input"
              value={homeTeam}
              placeholder="Home Team"
              onChange={(e) => setHomeTeam(e.target.value)}
            />
          </label>

          <label>
            Enter Away Team:
            <br />
            <input
              className="form-input"
              value={awayTeam}
              placeholder="Away Team"
              onChange={(e) => setAwayTeam(e.target.value)}
            />
          </label>
          <button className="submit-button">Add Event</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
