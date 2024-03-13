import React, { useState } from "react";
import "./Content.css";
import countriesData from "../../data/data.json";

function Content() {
  const [randomCountries1, setRandomCountries1] = useState([]);
  const [randomCountries2, setRandomCountries2] = useState([]);

  const selectRandomCountries = () => {
    const shuffledCountries = countriesData.sort(() => 0.5 - Math.random());
    const selectedCountries1 = shuffledCountries.slice(0, 5);
    const selectedCountries2 = shuffledCountries.slice(5, 10);
    setRandomCountries1(selectedCountries1);
    setRandomCountries2(selectedCountries2);
  };

  useState(() => {
    selectRandomCountries();
  }, []);

  return (
    <>
      <div className="rows">
        {randomCountries1.map((country) => (
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
      <div className="rows">
        {randomCountries2.map((country) => (
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
