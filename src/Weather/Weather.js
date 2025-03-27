import React, { useEffect, useState } from 'react'
import broken from './broken.png'
import clear from './clear.png'
import few from './few.png'
import mist from './mist.png'
import rain from './rain.png'
import scattered from './scattered.png'
import shower from './scattered.png'
import snow from  './snow.png'
import thunderStrom from './thunderstrom.png'
function WeatherData({icon,city,country,temp,lat,long,humidity,wind}){
return (
    <>
    <div className="weatherIcon">
        <img src={icon} alt="" />
    </div>

    
    <div className="temp">{temp}°C</div>
    <div className="city">{city}</div>
    <div className="country">{country}</div>
    <div className="moist">
        <div className="humidity">
            <span>❄️</span>
            <span>{humidity}km/hr</span>
        </div>
        <div className="wind">
            <span>🍃</span>
            <span>{wind}km/hr</span>
        </div>
    </div>
    <div className="coord">
        <div className="lat">
            <span>Latitude</span>
            <span>{lat}</span>
        </div>
        <div className="long">
            <span>Longtitude</span>
            <span>{long}</span>
        </div>
    </div>
    </>
)
}

function Weather() {
    const api = "fabe75f24783af99550715ddae605d93"
    const[text,setText]=useState("Chennai");
    const [icon,setIcon]=useState();
    const [temp,setTemp]=useState(0);
    const [city,setCity]=useState("chennai")
    const [country,setCountry]=useState("IN");
    const[humidity,setHumidity]=useState(0);
    const [wind,setWind]=useState(0);
    const [lat,setLat]=useState(0);
    const [long,setLong]=useState(0);

const WeatherIcon = {
    "01d":clear,
    "01n":clear,
    "02d":few,
    "02n":few,
    "03d":scattered,
    "03n":scattered,
    "04n":broken,
    "04d":broken,
    "09d":shower,
    "09n":shower,
    "10d":rain,
    "10n":rain,
    "11d":thunderStrom,
    "11n":thunderStrom,
    "13d":snow,
    "13n":snow,
    "50d":mist,
    "50n":mist
}
const search = async()=>{
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        if(data.cod=="404"){
console.log("city not found")
        }else{
            setTemp(Math.floor(data.main.temp))
            setCity(data.name)
            setCountry(data.sys.country)
            setLat(data.coord.lat)
            setLong(data.coord.lon)
            setHumidity(data.main.humidity)
            setWind(data.wind.speed)
            const code = data.weather[0].icon;
            setIcon(WeatherIcon[code])
        }
    }catch(e){
        console.log("error occured" + e.message)
    }
}
useEffect(()=>{
search()
},[])
    const handleValue=(e)=>{
        setText(e.target.value);
    }

  return (
    <div>
        <h1>Weather Application</h1>
        <div className="container">
          <div className="input_cont" >
            <input type="text" onChange={handleValue} value={text} />
          </div>
          <div className="search_cont" onClick={()=>search()}>
            🔍
          </div>
        </div> 
   <WeatherData icon={icon} temp={temp}
   city={city} country={country} humidity={humidity}
   wind={wind} lat={lat} long={long} />

    </div>
  )
}

export default Weather