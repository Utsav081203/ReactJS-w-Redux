import { useState } from 'react';
import './App.css';

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Mumbai", "Delhi"],
  },
  {
    name: "China",
    value: "CN",
    cities: ["Shanghai", "Beijing"],
  },
  {
    name: "Japan",
    value: "JP",
    cities: ["Osaka", "Tokyo"],
  },
]

function App() {
  const [country, setCountry] = useState([]);

  return (
    <>
      <select 
      value={country}
      onChange={(e) => {
        setCountry(e.target.value)
      }}
      >
        {countries.map((item, index) => (
          <option value={index} key={index}>{item.name}</option>
        ))}
      </select>
      <select 
      >
        {
          countries[country].cities.map((item, index) => (
            <option value={index} key={index}>{item}</option>
          ))
        }
        {
          console.log(countries[country].cities)
        }
      </select>
    </>
  )
}

export default App
