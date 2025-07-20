import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "c0d601b53a8ff394ff154dcce093cc0f";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                temp_Min : jsonResponse.main.temp_min,
                temp_Max : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
        console.log(result);
        return result;
        } catch (err) {
            throw err;
        }
    }

    //function to handle input changes
    let handleChange = (evt) => { 
        setCity(evt.target.value);
    }

    // function to handle form submission
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            setError("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="searchBox">
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>

                {error && <p style={{color : "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}