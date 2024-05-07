import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { IoIosSearch } from "react-icons/io";


const api = {
  key: "14d4406135f3f031018726cbefa96b80",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

        <div className='box'>
          <label>Check Weather</label>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}><IoIosSearch /></button>

          {typeof weather.main !== "undefined" ? (
          <div className='weather-details'>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
        </div>

      <TodoList/>
    </div>
  );
}

export default App;
