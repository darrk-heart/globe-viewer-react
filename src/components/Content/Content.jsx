// Content.js
import React, { useState, useEffect } from "react";
import "./Content.css";
import countriesData from "../../data/data.json";

function Content({ filter }) {
  const [randomCountries1, setRandomCountries1] = useState([]);
  const [randomCountries2, setRandomCountries2] = useState([]);

  const selectRandomCountries = () => {
    const shuffledCountries = countriesData.sort(() => 0.5 - Math.random());
    const selectedCountries1 = shuffledCountries.slice(0, 5);
    const selectedCountries2 = shuffledCountries.slice(5, 10);
    setRandomCountries1(selectedCountries1);
    setRandomCountries2(selectedCountries2);
  };

  useEffect(() => {
    selectRandomCountries();
  }, []);

  const filterCountriesByName = (countries, searchQuery) => {
    if (!searchQuery) {
      return countries;
    }
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filterCountriesByRegion = (countries, regionFilter) => {
    if (!regionFilter) {
      return countries;
    }
    return countries.filter((country) =>
      country.region.toLowerCase().includes(regionFilter.toLowerCase())
    );
  };

  const filteredCountries1 = filterCountriesByName(randomCountries1, filter);
  const filteredCountries2 = filterCountriesByName(randomCountries2, filter);

  return (
    <>
      <div className="rows">
        {filteredCountries1.map((country) => (
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
        {filteredCountries2.map((country) => (
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
