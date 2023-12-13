import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Homepage.css"

const Homepage = () => {
 const [searchCity,setSearchCity] = useState("London")
 const [weatherData,setWeatherData] = useState("")
 const fetchSearchResults = async () => {
    try {
      const query = searchCity
      const response = await axios.get(`http://localhost:4000/weatherData`,[query]);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };
 useEffect(()=>{
    fetchSearchResults()
 },[])

  return (
    <div className='main-container'>
        <div className='section1'>Search History</div>
        {/* {weatherData?(<>
            <div className='section2'>
            <div className='search-box'>
                <input type="text" placeholder='Search' onChange={(e)=>setSearchCity(e)}/>
                <button className='search-btn' onClick={fetchSearchResults}>Search</button>
            </div>
            <div className='Weather-card'>
                <div className='city-name'>{weatherData.location.name}</div>
                <div className='city-temp'>{weatherData.current.temp_c}</div>
                <div className='city-wind'> Wind- 69 KMPH</div>
                <div className='city-humidity'>Humidity: 70%</div>
            </div>
        </div>
        </>):(<div>No Data</div>)} */}
        <div className='section3'>Favourites</div>
    </div>
  )
}

export default Homepage