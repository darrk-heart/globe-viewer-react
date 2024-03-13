import React, { useState } from "react";
import "./Content.css";
import countriesData from "../../data/data.json";

function Content() {
  const [randomCountries, setRandomCountries] = useState([]);

  const selectRandomCountries = () => {
    const shuffledCountries = countriesData.sort(() => 0.5 - Math.random());
    const selectedCountries = shuffledCountries.slice(0, 4);
    setRandomCountries(selectedCountries);
  };

  useState(() => {
    selectRandomCountries();
  }, []);

  return (
    <>
      <div className="rows">
        {randomCountries.map((country) => (
          <div className="countries" key={country.name}>
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              width="220"
              height="150"
            />
            <h4>{country.name}</h4>
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
