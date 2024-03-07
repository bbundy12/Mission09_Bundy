import React from 'react';
import logo from './logo.svg';
import './App.css';

// Saving json data to teams variable
import teams from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// #1:  A heading section at the top introducing the user to what the site is
function Intro() {
  return (
    <header className="heading-section">
      <h1>Welcome to College Hoops Central!</h1>
      <p>
        Dive into the heart of college basketball with College Hoops Central,
        your premier destination for all things NCAA Basketball. Explore a
        comprehensive list of colleges participating in the excitement of March
        Madness and beyond. Get to know each team with just a click, from their
        home courts to the mascots that rally their fans. Whether you're a
        die-hard basketball aficionado or a casual fan looking to catch up on
        college hoops, our site brings the game closer to you. Discover the
        teams, celebrate the schools, and join the community of fans right here
        at College Hoops Central.
      </p>
    </header>
  );
}

// #2:  A team “card” that contains the following information about each school:
// • School Name
// • Mascot Name
// • Location (City, State)
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>School</strong>
                </td>
                <td>{oneTeam.school}</td>
              </tr>
              <tr>
                <td>
                  <strong>Mascot</strong>
                </td>
                <td>{oneTeam.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Location</strong>
                </td>
                <td>
                  {oneTeam.city}, {oneTeam.state}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
// #3: A list of team cards that shows all the teams on the list.
function CardList() {
  return (
    <div>
      {teams.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
      </header>
      <CardList />
    </div>
  );
}

export default App;
