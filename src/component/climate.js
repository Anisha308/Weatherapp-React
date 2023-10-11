import React ,{ useState } from 'react'

function Climate() {
  const [weather, setWeather] = useState(0)
  
  
  const addWeather = (e) => {
    setWeather(e.target.value)
  }
  return (
    <div>
      <h1>Weather app</h1>
      <p>Current Temperature: {weather}°C</p>

      <input type="number" value={weather} onChange={addWeather} />
    </div>
  );
}

export default Climate
