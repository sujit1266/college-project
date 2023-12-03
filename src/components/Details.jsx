import { Link } from "react-router-dom";
import "../styling/Details.css";
import Showpersentage from "./persentage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Details = () => {
     return (
          <div className="details">
          <Link to={"/signup"}>
               <button className="loginbutton">Login</button>
               </Link>
               <div className="outer-div">
                    <div className="detail-image">

                    </div>
                    <div className="show-persentage">
                         <Showpersentage classname="per1 inner-div" persent="10%" />
                         <Showpersentage classname="per2 inner-div" persent="20%" />
                         <Showpersentage classname="per3 inner-div" persent="30%" />
                    </div>
                    <div className="information">
                         <h1>Wheat</h1>
                         <p>Raw wheat can be ground into flour or, using hard durum wheat only, can be ground into semolina; germinated and dried creating malt; crushed or cut into cracked wheat; parboiled (or steamed), dried, crushed and de-branned into bulgur also known as groats.</p>
                    </div>
                    <div className="plant-options">
                         <button className="arrow-button"><IoIosArrowBack /></button>
                         <div className="plant-div">Plant!</div>
                         <button className="arrow-button"><IoIosArrowForward /></button>
                    </div>
               </div>
          </div>
     )
}

export default Details;
