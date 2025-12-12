import React from "react";
import { useParams, Link } from "react-router-dom";
import countrydata from "../countrydata/countrydata";

const CountryDetail = () => {
  const { name } = useParams();

  const country = countrydata.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) {
    return (
      <div className="text-white p-10">
        <h1>Country not found</h1>
      </div>
    );
  }

  
  const {
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    name: cname,
  } = country;

  return (
    <div className="p-6 md:p-12 min-h-screen text-white bg-black">

      
      <Link to="/">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md 
          rounded-lg border border-white/20 hover:bg-white/20 transition-all mb-10">
          ← Back
        </button>
      </Link>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Flag */}
        <div className="w-full">
          <img
            src={flags.svg}
            alt={cname.common}
            className="w-full rounded-xl shadow-xl border border-white/20"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">

          <h1 className="text-3xl font-bold">{cname.common}</h1>

          <div className="grid sm:grid-cols-2 gap-6 text-sm leading-relaxed">

            {/* Column 1 */}
            <div className="space-y-2">
              <p><span className="font-semibold">Official Name:</span> {cname.official}</p>
              <p><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {region}</p>
              <p><span className="font-semibold">Subregion:</span> {subregion}</p>
              <p><span className="font-semibold">Capital:</span> {capital?.[0]}</p>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <p><span className="font-semibold">Top Level Domain:</span> {tld?.join(", ")}</p>

              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {currencies && Object.values(currencies).map((c) => c.name).join(", ")}
              </p>

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {languages && Object.values(languages).join(", ")}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
