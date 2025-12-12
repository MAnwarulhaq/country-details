import React, { useState } from "react";
import countrydata from "../countrydata/countrydata";
import Card from "./Card";

const Country = () => {
  const [search, setSearch] = useState("");

  // Filter Countries
  const filteredCountries = countrydata.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[90%] mx-auto text-white">
      <h1 className="text-2xl font-bold my-3">Countries Data</h1>
      <p>Total Countries: {countrydata.length}</p>

      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search country..."
          onChange={(e) => setSearch(e.target.value)}
          className="border border-white bg-transparent px-4 py-2 rounded-lg  my-6 placeholder:text-white"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredCountries.length > 0 ? (
          // filteredCountries.sort().map((country) => (
          //   <Card
          //     key={country.name.common}
          //     name={country.name.common}
          //     flag={country.flags.svg}
          //     population={country.population}
          //     region={country.region}
          //     capital={country.capital?.[0]}
          //   />
          // ))
          filteredCountries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => (
              <Card
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            ))
        ) : (
        <p className="col-span-full text-center text-gray-400">
          No country found...
        </p>
        )}
      </div>
    </div>
  );
};

export default Country;
