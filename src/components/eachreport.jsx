import "./assistant.css";
// import { CiTempHigh } from "react-icons/ci";


const Eachreport = (props) => {
     return (
          <div className={props.classname}>
               {/* <CiTempHigh className="Air-icon" /> */}
               {props.icon}
               <p className="measurment">{props.measurment}</p>
               <p className="nameofmeasurment">{props.name}</p>
               <div className="condition">
                    <p>{props.type}</p>
               </div>
          </div>
     )
}

export default Eachreport;