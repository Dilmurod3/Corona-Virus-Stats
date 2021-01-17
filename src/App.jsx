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
      <div className="Main">
        <div className="Tittle-Search">
          <h1>Covid-19 statistics</h1>
          <h1>in the world</h1>
          <input
            type="search"
            name=""
            id=""
            onChange={handleSetCountry}
            placeholder="Country"
          />
          <button onClick={handleGetCasesByCountry}>Search</button>
        </div>
        <div className="Cases-Image">
          {cases ? (
            cases.data.rows.map((c) => (
              <>
                <div className="Info-Flag">
                  <div className="Cases">
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
                  </div>
                  <div className="Image">
                    <img src={c.flag} alt="" />
                  </div>
                </div>
              </>
            ))
          ) : (
            <p>No Cases to display!</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
