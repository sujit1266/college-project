import "../styling/assistant.css";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiTempHigh } from "react-icons/ci";
import Eachreport from "./eachreport";
import { BsMoisture } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { APIProvider, Map } from "@vis.gl/react-google-maps";




const Assistant = () => {
     const position = { lat: 53.54, lng: 10 };

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
                    <Eachreport icon={<CiTempHigh className="report-icons" />} measurment="+20℃" name="Air Temp"  type="Good" classname="air temp"/>
                    <Eachreport icon={<BsMoisture className="report-icons" />} measurment="72%" name="Soil Moisture"  type="High" classname="soil temp"/>
                    <Eachreport icon={<FaCloudShowersHeavy className="report-icons" />} measurment="-2mm" name="preciptiation" type="Low"  classname="pre temp"/>
               </div>
               <div className="field-text">
                    <h2>Manage Your fields</h2>
                    <p>Select an area for showing</p>
                    <button><FaMapMarkerAlt className="map-icon"/>Ready To Show</button>
               </div>
                
               <div className="field">
        <div className="App" style={{ height: "43vh", width: "100%",   }}>
          <APIProvider apiKey={"AIzaSyBYVCPwJEVI2t7HQFbobyR_c-Eqay7N9zI "}>
            <Map zoom={9} center={position} mapId={"35817c4a428adc97"}></Map>
          </APIProvider>
        </div>
      </div>
                
          </div>
     )
}


export default Assistant;