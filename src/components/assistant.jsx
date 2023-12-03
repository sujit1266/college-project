import "../styling/assistant.css";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiTempHigh } from "react-icons/ci";
import Eachreport from "./eachreport";
import { BsMoisture } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import axios from "axios";

const API_endpoint = `https://api.openweathermap.org/data/2.5`;
const API_key = `7fcc9cf023a47757aa5263e37dac405f`;
const Assistant = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [response, setResponse] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        
        const finalAPIEndPoint = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=fff910b5c1094a88a1cf204e71032260&include=minutely`;
        const response = await axios.get(finalAPIEndPoint);
        console.log(response?.data?.data[0]);
        setResponse(response?.data?.data[0]);
        console.log(finalAPIEndPoint);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    
    fetchData();
  }, []);
  const position = { lat:22.4979 , lng:88.3191 };
  
  return (
    <div className="assistant">
      <div className="div1">
        <div>
          <h1>Your Agriculture Assistant</h1>
          <p>Helping You To Make The Right Decision and Seed Your Plant</p>
        </div>
        <div className="options">
          <IoIosSearch className="search-icon icons" />
          <IoMdNotificationsOutline className="icons" />
          <div className="profile">
            <div className="inner-profile"></div>
          </div>
        </div>
      </div>
      <div className="showWeather">
        <Eachreport
          icon={<CiTempHigh className="report-icons" />}
          measurment={`${response?.temp} °C ${response?.app_temp} °C`}
          name="Temp"
          type="Good"
          classname="air temp"
        />
        <Eachreport
          icon={<BsMoisture className="report-icons" />}
          measurment="72%"
          name="Soil Moisture"
          type="High"
          classname="soil temp"
        />
        <Eachreport
          icon={<FaCloudShowersHeavy className="report-icons" />}
          measurment={`${response?.precip} mm`}
          name={response?.weather?.description}
          type="Low"
          classname="pre temp"
        />
      </div>
      <div className="field-text">
        <h2>Manage Your fields</h2>
        <p>Select an area for showing</p>
        <button>
          <FaMapMarkerAlt className="map-icon" />
          Ready To Show
        </button>
      </div>

      <div className="field">
        <div className="App" style={{ height: "43vh", width: "100%" }}>
          <APIProvider apiKey={"AIzaSyBYVCPwJEVI2t7HQFbobyR_c-Eqay7N9zI "}>
            <Map zoom={9} center={position} mapId={"35817c4a428adc97"}></Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
