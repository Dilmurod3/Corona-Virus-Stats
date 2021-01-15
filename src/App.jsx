import React, { useState } from "react";
import covidRepository from "./repositories/covidRepository";
import "./App.css";
//
function App() {
  const [country, setCountry] = useState();
  const [cases, setCases] = useState(false);

  const handleSetCountry = (input) => {
    setCountry(input.target.value);
  };

  const handleGetCasesByCountry = async () => {
    const cases = await covidRepository({ country });

    setCases(cases);
  };

  return (
    <div className="App">
      <input type="search" name="" id="" onChange={handleSetCountry} />
      <button onClick={handleGetCasesByCountry}>Search</button>
      {cases ? (
        cases.data.rows.map((c) => (
          <>
            <h2>
              <b>Country:</b> {c.country}
            </h2>
            <h3>
              <b>Total cases:</b> {c.total_cases}
            </h3>
            <h3>
              <b>Recovered: </b> {c.total_recovered}
            </h3>
            <h3>
              <b>Deaths: </b> {c.total_deaths}
            </h3>
            <hr />
          </>
        ))
      ) : (
        <p>No Cases to display!</p>
      )}
    </div>
  );
}
export default App;
