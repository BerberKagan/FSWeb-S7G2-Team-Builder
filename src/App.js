import './App.css';
import { useState } from 'react';
import Form from "./Components/Form"

const initialMembers = [
  {
    name: "Max Verstappen",
    role: "F1",
    favoriteTime: "Night"
  },
  {
    name: "Mauro Icardi",
    role: "Football",
    favoriteTime: "Night"
  },
  {
    name: "Rafael Nadal",
    role: "Tennis",
    favoriteTime: "Daytime"
  },
];

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMembers);

  const teamListUpdater = (formValues) => {
    setTeamMembers([...teamMembers, formValues]);
  }

  return (
    <div className="App">
      <ul>
        {teamMembers.map((e, i) => {
          return <li key={i}>{e.name} | {e.role} - {e.favoriteTime} </li>
        })}
      </ul>
      <Form updateTeamList={teamListUpdater} />
    </div>
  );
}

export default App;
