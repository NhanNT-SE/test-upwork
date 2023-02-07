import React from "react";
import "./App.css";
import { SelectCountries, Country } from "./components/SelectCountries";

// mock data
const countries: Country[] = [
  {
    country: "Nederlands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    country: "Francais",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
  },
  {
    country: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
  },
  {
    country: "Deutsch",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  },
  {
    country: "Italiano",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  },
];
function App() {
  return (
    <div className="App">
      <SelectCountries countries={countries} />
    </div>
  );
}

export default App;
