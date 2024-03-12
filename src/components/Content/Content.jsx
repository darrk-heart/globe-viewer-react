import React, { useState } from "react";
import countriesData from "../../data/data.json";

function Content() {
  const [randomCountries, setRandomCountries] = useState([]);

  const selectRandomCountries = () => {
    const shuffledCountries = countriesData.sort(() => 0.5 - Math.random());
    const selectedCountries = shuffledCountries.slice(0, 8);
    setRandomCountries(selectedCountries);
  };

  useState(() => {
    selectRandomCountries();
  }, []);
  // })
  return (
    <div>
      <div>
        {randomCountries.map((country) => (
          <div key={country.name}>
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              width="50"
              height="30"
            />
            <p>Name: {country.name}</p>
            <p>Population: {country.population}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
